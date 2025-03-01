import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.page.html',
  styleUrls: ['./add-job.page.scss'],
  standalone: false,
})
export class AddJobPage implements OnInit {

  
  postJob: FormGroup;

  constructor(private alertController: AlertController, private fb: FormBuilder) { 
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

}
