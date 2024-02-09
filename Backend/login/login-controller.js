const userModel = require("../signup/signup-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretKey = "Authentication";

exports.login = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (user) {
        if(user.role != req.body.role) {
            return res.status(400).json({ error: "Role doesn't match" })
        }
      const result = await bcrypt.compare(req.body.password, user.password);
      if (result) {
        const token = jwt.sign(
          { email: user.email, role: user.role },
          secretKey,
          { expiresIn: "10m" }
        );
        const userInfo = {
          email: user.email,
          role: user.role,
        };
        res.status(200).json({ token, userInfo });
      } else {
        res.status(400).json({ error: "password doesn't match" });
      }
    } else if (!req.body.username && !req.body.password & !req.body.role) {
      res.status(400).json({ error: "Required" });
    } else {
      res.status(400).json({ error: "User doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
