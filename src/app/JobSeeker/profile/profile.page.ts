import { Component, HostListener, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Camera, CameraSource, CameraResultType } from '@capacitor/camera';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {

  
  bannerImage: string | null = null;
  profileImage: string | null = null;

  

  constructor(private actionSheetController: ActionSheetController,
     private router: Router, 
     private alertController: AlertController, private profileService: ProfileService) {
      this.profileService.profileImage$.subscribe(image => {
        this.profileImage = image; 
      });
     }

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
  async presentCameraOptions(imageType: 'banner' | 'profile') {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choose an option',
      buttons: [
        {
          text: 'Camera',
          icon: 'camera-outline',
          handler: () => {
            this.openDeviceCamera(imageType);
          },
        },
        {
          text: 'Browse',
          icon: 'image-outline',
          handler: () => {
            this.openGallery(imageType);
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

  async openDeviceCamera(imageType: 'banner' | 'profile') {
    try {
      const photo = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera, 
      });

      if (photo.webPath) {
        if (imageType === 'banner') {
          this.bannerImage = photo.webPath;
        } else if (imageType === 'profile') {
          this.profileImage = photo.webPath;
          this.profileService.setProfileImage(photo.webPath); // Save to service
        }
      }
    } catch (error) {
      console.error('Error accessing the camera:', error);
    }
  }

  async openGallery(imageType: 'banner' | 'profile') {
    try {
      const photo = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos, 
      });

      if (photo.webPath) {
        if (imageType === 'banner') {
          this.bannerImage = photo.webPath;
        } else if (imageType === 'profile') {
          this.profileImage = photo.webPath;
          this.profileService.setProfileImage(photo.webPath); 
        }
      }
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

  openDropdownIndex: number | null = null;

  toggleDropdown(index: number) {
    if (this.openDropdownIndex === index) {
      this.openDropdownIndex = null; 
    } else {
      this.openDropdownIndex = index; 
    }
  }

  @HostListener('document:click', ['$event'])
  closeDropdownOnClick(event: MouseEvent) {
    const clickedInside = (event.target as HTMLElement).closest('.box-2');
    if (!clickedInside) {
      this.openDropdownIndex = null; 
    }
  }

  //Delete Education


  async presentDeleteAlert(index: number, type: 'education' | 'experience') {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete this item?',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => {
            if (type === 'education'){
              this.deleteEducation(index);
            }
            else if(type === 'experience'){
              this.deleteExperience(index);
            }
          }
          
        }
      ]
    });

    await alert.present();
  }

  deleteEducation(index: number) {
    this.educations.splice(index, 1); 
  }

  deleteExperience(index: number) {
    this.experiences.splice(index, 1); 
  }
  
}
