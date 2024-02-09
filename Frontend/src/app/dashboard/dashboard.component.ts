import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public token = sessionStorage.getItem('token');
  public user = JSON.parse(this.token!);
  public isDisabled: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
