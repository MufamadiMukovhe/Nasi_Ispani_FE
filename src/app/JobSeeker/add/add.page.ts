import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
  standalone: false,
})
export class AddPage implements OnInit {


   addEducation: FormGroup;
   addExperience: FormGroup;
    constructor(private fb: FormBuilder) {
      this.addEducation = this.fb.group({
        qualificationName: ['', Validators.required],
        institution: ['', Validators.required],
        level: ['', Validators.required],
        location: ['', Validators.required],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required]
      }), 

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
  
  

}
