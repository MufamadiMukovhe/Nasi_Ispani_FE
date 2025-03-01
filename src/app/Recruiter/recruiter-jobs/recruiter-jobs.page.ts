import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-recruiter-jobs',
  templateUrl: './recruiter-jobs.page.html',
  styleUrls: ['./recruiter-jobs.page.scss'],
  standalone: false,
})
export class RecruiterJobsPage implements OnInit {

  postJob = FormGroup;

  constructor(private alertController: AlertController, private fb: FormBuilder) { 
    this.fb.group({
      
    })
  }

  ngOnInit() {
  }

}
