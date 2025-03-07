import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {

  constructor() { }

  messages = [
    {
      name: 'John Doe',
      role: 'IT Manager',
      imgSrc: '../../../assets/images/Ellipse 2.png',
      introTitle:'Frontend developer, Web designer',
      lastMessage: 'Lorem ipsum dolor sit amet, consectetur...',

    },
    {
      name: 'Jane Smith',
      role: 'Graphic designer',
      imgSrc: '../../../assets/images/Ellipse 2.png',
      introTitle: 'Multimedia and Graphic designer',
      lastMessage: 'Lorem ipsum dolor sit amet, consectetur...',

    }]
  ngOnInit() {
  }

}
