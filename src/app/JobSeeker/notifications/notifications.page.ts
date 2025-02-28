import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
  standalone: false,
})
export class NotificationsPage implements OnInit {

  constructor(private alertController: AlertController) {

   }

  ngOnInit() {
  }

  notifications = [
    { message: 'Your application for IT Manager position has been viewed by the employer', time: '1h ago' },
    { message: 'You have a new message from the HR department', time: '2h ago' },
    { message: 'Your profile has been updated successfully', time: '3h ago' },
    { message: 'You have been shortlisted for the Developer position', time: '5h ago' },
    { message: 'A new job posting matches your profile', time: '8h ago' }
  ];

   //delete Notification
   async presentDeleteAlert(index: number) {
    const alert = await this.alertController.create({
      header: 'Delete Notification',
      message: 'Are you sure you want to delete this notification?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteNotification(index);
          }
        }
      ]
    });

    await alert.present();
  }
  async deleteNotification(index: number) {
    const deletedNotification = this.notifications[index].message; 
    this.notifications.splice(index, 1);

    const successAlert = await this.alertController.create({
      header: 'Deleted',
      message: `Notification deleted successfully.`,
      buttons: ['OK']
    });

    await successAlert.present();
  }

 

}
