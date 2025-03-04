import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.page.html',
  styleUrls: ['./add-job.page.scss'],
  standalone: false,
})
export class AddJobPage implements OnInit {

  isLoading: boolean = false;
  postJob: FormGroup;

  constructor(private alertController: AlertController, private fb: FormBuilder, private router: Router) { 
  this.postJob = this.fb.group({
    name:['', Validators.required],
    company:['', Validators.required],
    location:['', Validators.required],
    employmentType:['', Validators.required],
    expLevel:['', Validators.required],
    environmentType:['', Validators.required],
    salary:['', Validators.required],
    summary:['', Validators.required],
    responsibility: ['', Validators.required],
    skills_Qualification:['', Validators.required],
    benefits:['', Validators.required]

  })
  }

  ngOnInit() {
  }

  currentForm: string = 'details';

  toggleForms(form: string) {
    this.currentForm = form;
  }

  onSubmit() {
    if (this.postJob.valid) {
      this.isLoading = true;
  
      setTimeout(async () => {
        this.isLoading = false;
  
        const jobName = this.postJob.value.name; // Get the job name
  
        const alert = await this.alertController.create({
          header: 'Success',
          message: `${jobName} position was successfully posted.`,
          buttons: [{
            text: 'OK',
            handler: () => {
              this.router.navigate(['/recruiter-jobs']);
            }
          }]
        });
  
        await alert.present();
      }, 3000);
    } 
  }
  
 /* async showValidationError() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Please fill in all required fields before posting the job.',
      buttons: ['OK']
    });
    await alert.present();
  }*/
  
}
