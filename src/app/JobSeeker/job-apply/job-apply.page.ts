import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.page.html',
  styleUrls: ['./job-apply.page.scss'],
  standalone: false, 
})
export class JobApplyPage implements OnInit {

  contactForm: FormGroup;
  educationForm: FormGroup;
  experienceForm: FormGroup;
  isLoading: boolean = false;
  //documentsForm: FormGroup;

  constructor(private fb: FormBuilder, private alertController: AlertController, private router: Router) 
  {
    //Contact form
    this.contactForm = this.fb.group({
      fullName: ['Mufamadi Mukovhe', Validators.required],
      email: ['mukovhemufamadi@gmail.com',[ Validators.required, Validators.email]],
      location: ['Pretoria, Gauteng, SA',[ Validators.required]],
      mobileNumber: ['0792331705',[ Validators.required,  Validators.pattern(/^[0-9]{10}$/)]],
    })

     //Education form
     this.educationForm = this.fb.group({
      qualificationName: ['Computer Science', Validators.required],
      institution: ['Tshwane University Of Technology', Validators.required],
      level: ['Diploma NQF6', Validators.required],  
      location: ['Pretoria, Gauteng, SA', Validators.required],
      startDate: ['2017-01-01', Validators.required], 
      endDate: ['2021-01-01', Validators.required] 
    });

      //Experience form
      this.experienceForm = this.fb.group({
        occupation: ['Full stack engineer', Validators.required],
        organisation: ['Mfactory', Validators.required],
        location: ['Pretoria, Gauteng, SA', Validators.required],
        startDate: ['2017-01-01', Validators.required], 
        endDate: ['2021-01-01', Validators.required] 
      });
   }

  ngOnInit() {
  }

  job_name: String = "IT Manager";
  currentForm: string = 'contact';


  toggleForms(form: string) {
    this.currentForm = form;
  }

  uploadedResume: string = '';
  uploadedQualifications: File[] = [];
  uploadedMatric: string = '';
  
  onResumeSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.uploadedResume = input.files[0].name;
    }
  }
  
  onMatricSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.uploadedMatric = input.files[0].name;
    }
  }
  

  onQualificationSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      // Append new files instead of replacing the existing list
      this.uploadedQualifications = [...this.uploadedQualifications, ...Array.from(input.files)];
    }
  }

  apply()
  {
    this.isLoading = true;

    setTimeout(async () => {
      this.isLoading = false;

      const alert = await this.alertController.create({
        header: 'Application Sent',
        message: 'Your application was sent successfully.',
        buttons: [{
          text: 'OK',
          handler: () => {
            this.router.navigate(['/jobs']);
          }
        }]
      });

      await alert.present();
    }, 3000);

  }





}
