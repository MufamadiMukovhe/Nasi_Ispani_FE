import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
  standalone: false,
})
export class NotificationsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  notifications = [
    { message: 'Your application for IT Manager position has been viewed by the employer', time: '1h ago' },
    { message: 'You have a new message from the HR department', time: '2h ago' },
    { message: 'Your profile has been updated successfully', time: '3h ago' },
    { message: 'You have been shortlisted for the Developer position', time: '5h ago' },
    { message: 'A new job posting matches your profile', time: '8h ago' }
  ];

}
