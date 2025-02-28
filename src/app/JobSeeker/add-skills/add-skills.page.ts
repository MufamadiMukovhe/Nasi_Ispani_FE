import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.page.html',
  styleUrls: ['./add-skills.page.scss'],
  standalone: false,
})
export class AddSkillsPage implements OnInit {

  isLoading: boolean = false;
  addSkills: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private alertController: AlertController) {
    this.addSkills = this.fb.group({
      skillName: ['', Validators.required],
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
        message: 'Skill successfully added',
        buttons: [],
        //cssClass: 'custom-alert',
      });
      await alert.present();      
      setTimeout(() => {
        alert.dismiss();
        this.addSkills.reset();
        this.router.navigate(['/profile']);
      }, 2000);
    }, 3000); 
  }

}
