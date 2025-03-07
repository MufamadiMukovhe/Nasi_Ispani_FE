import { Component, OnInit } from '@angular/core';
import {ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController, ActionSheetController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.page.html',
  styleUrls: ['./message-details.page.scss'],
  standalone: false,
})
export class MessageDetailsPage implements OnInit {

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  uploadedFileName: string = '';

  isLoading: boolean = false;
  constructor(
    private router: Router,
    private alertController: AlertController,
    private actionSheetController: ActionSheetController,
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
  

  //Upload document 
  openFilePicker() {
    this.fileInput.nativeElement.click(); 
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const selectedFile = input.files[0];
      this.uploadedFileName = selectedFile.name;
      console.log('Selected file:', selectedFile.name);
    }
  }


  // Open Camera and Capture Image
  async openCamera() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera
      });

      const imagePath = image.path || image.webPath || 'captured_image.jpg';
      this.uploadedFileName = imagePath.split('/').pop() || 'captured_image.jpg';
      console.log('Captured Image:', this.uploadedFileName);
    } catch (error) {
      console.error('Camera Error:', error);
    }
  }
  toProfile() {
    this.router.navigate(['/profile']);
  }
}
