import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const token = sessionStorage.getItem('token');
  const user = JSON.parse(token!);
  if(user) {
    if (route.data['roles'] && route.data['roles'].indexOf(user.userInfo.role) === -1) {
      // role not authorised so redirect to home page
      router.navigate(['/dashboard']);
      return false;
  }
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
