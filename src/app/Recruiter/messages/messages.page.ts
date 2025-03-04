import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
  standalone: false
})
export class MessagesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  messages = [
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

   //Search using the name
   searchText: string = '';
   
   get filteredMessages() {
    if (!this.searchText) {
      return this.messages;
    }
    return this.messages.filter(message =>
      message.name.toLowerCase().startsWith(this.searchText.toLowerCase())
    );
  }

  toProfile(){
    this.router.navigate(['/profile'])
  }

  toMessageDetails(){
    this.router.navigate(['/message-details'])

  }
}
