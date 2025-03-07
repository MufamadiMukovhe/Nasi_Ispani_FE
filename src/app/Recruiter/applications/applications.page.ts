import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.page.html',
  styleUrls: ['./applications.page.scss'],
  standalone: false,
})
export class ApplicationsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  applications = [
    {
      name: 'John Doe',
      date: '19 Feb',
      imgSrc: '../../../assets/images/Ellipse 2.png',
      lastMessage: 'Lorem ipsum dolor sit amet, consectetur...',
    },
    {
      name: 'Jane Smith',
      date: '18 Feb',
      imgSrc: '../../../assets/images/Ellipse 2.png',
      lastMessage: 'Hello! How are you doing today?',
    },
    {
      name: 'Alex Brown',
      date: '17 Feb',
      imgSrc: '../../../assets/images/Ellipse 2.png',
      lastMessage: 'See you at the meeting at 3 PM!',
    },
    {
      name: 'Phumudzo Tshivhase',
      date: '17 Feb',
      imgSrc: '../../../assets/images/Ellipse 2.png',
      lastMessage: 'Do you have Knowledge in C#',
    },
    {
      name: 'Knowledge Khoza',
      date: '16 Feb',
      imgSrc: '../../../assets/images/Ellipse 2.png',
      lastMessage: 'See you at the meeting at 3 PM!',
    }
  ];


}
