import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.page.html',
  styleUrls: ['./add-experience.page.scss'],
  standalone: false,
})
export class AddExperiencePage implements OnInit {

  isLoading: boolean = false;
  addExperience: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private alertController: AlertController) {
    this.addExperience = this.fb.group({
      occupation: ['', Validators.required],
      organisation: ['', Validators.required],
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
        message: 'Experience successfully added',
        buttons: [],
        //cssClass: 'custom-alert',
      });

      await alert.present();      
      setTimeout(() => {
        alert.dismiss();
        this.addExperience.reset();
        this.router.navigate(['/profile']);
      }, 2000);

    }, 3000); 
  }

}
