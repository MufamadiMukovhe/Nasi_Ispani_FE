import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ActionSheetController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.page.html',
  styleUrls: ['./message-details.page.scss'],
  standalone: false,
})
export class MessageDetailsPage implements OnInit {

  isLoading: boolean = false;
  constructor(
    private router: Router,
    private alertController: AlertController,
    private actionSheetController: ActionSheetController,
    private loadingController: LoadingController // Import LoadingController
  ) { }

  ngOnInit() {
  }

  name: string = 'John Doe';
  date: string = '19 Feb';
  imgSrc: string = '../../../assets/images/Ellipse 2.png';
  introTitle: string = 'Frontend developer, Web designer';

  // Cancel and delete conversation
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Conversation Options',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.showDeleteConfirmation();
          }
        },
        {
          text: 'Mute',
          handler: () => {
            console.log('Mute clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    await actionSheet.present();
  }

  // Delete alert with loading for 3 seconds
  async showDeleteConfirmation() {
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      message: 'Do you want to delete this conversation?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Delete canceled');
          }
        },
        {
          text: 'Yes',
          handler: async () => {
            console.log('Delete confirmed');
            this.isLoading = true;
            setTimeout(async () => {
              // After 3 seconds, show an alert confirming deletion
              const deletionAlert = await this.alertController.create({
                header: 'Deleted',
                message: 'The conversation has been deleted.',
                buttons: [
                  {
                    text: 'OK',
                    handler: () => {
                      this.router.navigate(['/messages']);  // Navigate back to messages page
                      this.isLoading = false;
                    }
                  }
                ]
              });
              await deletionAlert.present();  // Show the "deleted" alert
            }, 3000); // Simulating 3 seconds of loading
          }
        }
      ]
    });
  
    await alert.present();
  }
  

  toProfile() {
    this.router.navigate(['/profile']);
  }
}
