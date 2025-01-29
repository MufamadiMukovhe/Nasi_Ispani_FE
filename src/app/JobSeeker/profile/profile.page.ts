import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraSource, CameraResultType } from '@capacitor/camera';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {

  
  bannerImage: string | null = null;
  

  constructor(private actionSheetController: ActionSheetController, private router: Router) {}

  ngOnInit() {
    this.totalPages = Math.ceil(this.skills.length / this.skillsPerPage);
    this.updatePaginatedSkills();
  }

  //Function to expand that paragraph
  isExpanded: boolean = false;

  toggleExpansion() {
    this.isExpanded = !this.isExpanded;
  }

  //List of Education
  educations = [
    {
      course_name: 'Computer science',
      university: 'Tshwane University of Technology',
      location: 'Pretoria, Gauteng, SA',
      duration: '2017 - 2027'
    },
    {
      course_name: 'Information Resource Management',
      university: 'University of South Africa',
      location: 'Pretoria, SA',
      duration: '2017 - 2027'

    },
  ];

  //Experience
  experiences = [
    {
      title: 'Full Stack Engineer',
      company: 'Mfactory',
      location: 'Pretoria, Gauteng, SA',
      duration: '2017 - 2021'
    },
    {
      title: 'Full Stack Developer',
      company: 'Artfundi',
      location: 'Cape town, South Africa',
      duration: '2022 - 2024'

    },
  ];

  //Skills

  skills: string[] = ['Java','PHP','SQL & PL/SQL','Angular JS & Bootstrap 5','C#','HTML 5, CSS, JavaScript, Typescript','WordPress','ASP.NET MVC',
    'MS office 2016, MS Teams & Outlook',
    'MS Server Management Studio 18',
    'A+, N+',
   ' .Net Framework, .Net Core',
   ' API design',
  '  Ionic, Cordova, Capacitor']
  
  // Function to present the camera/gallery options
  async presentCameraOptions() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choose an option',
      buttons: [
        {
          text: 'Camera',
          icon: 'camera-outline',
          handler: () => {
            this.openDeviceCamera();
          },
        },
        {
          text: 'Browse',
          icon: 'image-outline',
          handler: () => {
            this.openGallery();
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
        },
      ],
    });

    await actionSheet.present();
  }

  async openDeviceCamera() {
    try {
      const photo = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera, 
      });

      this.bannerImage = photo.webPath ?? null;
    } catch (error) {
      console.error('Error accessing the camera:', error);
    }
  }

  async openGallery() {
    try {
      const photo = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos, 
      });

      this.bannerImage = photo.webPath ?? null;
    } catch (error) {
      console.error('Error accessing the photo gallery:', error);
    }
  }


  //Pagination
    
  currentPage: number = 1;
  skillsPerPage: number = 6;
  paginatedSkills: string[] = [];
  totalPages: number = 0;

  math = Math;
  updatePaginatedSkills() {
    const startIndex = (this.currentPage - 1) * this.skillsPerPage;
    const endIndex = startIndex + this.skillsPerPage;
    this.paginatedSkills = this.skills.slice(startIndex, endIndex);
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedSkills();
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedSkills();
    }
  }

  //edit profile Education
  editEducation(){
    this.router.navigate(['./login'])
  }

}
