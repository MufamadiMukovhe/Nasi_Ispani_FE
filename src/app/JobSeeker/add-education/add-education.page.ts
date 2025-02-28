import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.page.html',
  styleUrls: ['./add-education.page.scss'],
  standalone: false,
})
export class AddEducationPage implements OnInit {

  isLoading: boolean = false;
  addEducation: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private alertController: AlertController) {
    this.addEducation = this.fb.group({
      qualificationName: ['', Validators.required],
      institution: ['', Validators.required],
      level: ['', Validators.required],
      location: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    })
   }

  ngOnInit() {
  }

  async onSave() {
    this.isLoading = true;

    setTimeout(async () => {
      this.isLoading = false;

      const alert = await this.alertController.create({
        header: 'Success',
        message: 'Education successfully added',
        buttons: [],
        //cssClass: 'custom-alert',
      });

      await alert.present();      
      setTimeout(() => {
        alert.dismiss();
        this.addEducation.reset();
        this.router.navigate(['/add-education']);
      }, 2000);

    }, 3000); 
  }


  get education() { return this.addEducation.controls; }
}
