import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.page.html',
  styleUrls: ['./add-experience.page.scss'],
  standalone: false,
})
export class AddExperiencePage implements OnInit {

  addExperience: FormGroup;
  constructor(private fb: FormBuilder) {
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
