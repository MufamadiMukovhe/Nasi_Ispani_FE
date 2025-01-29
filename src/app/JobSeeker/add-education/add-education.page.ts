import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.page.html',
  styleUrls: ['./add-education.page.scss'],
  standalone: false,
})
export class AddEducationPage implements OnInit {

  addEducation: FormGroup;
  constructor(private fb: FormBuilder) {
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

}
