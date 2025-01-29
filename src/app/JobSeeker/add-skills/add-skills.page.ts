import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.page.html',
  styleUrls: ['./add-skills.page.scss'],
  standalone: false,
})
export class AddSkillsPage implements OnInit {

  addSkills: FormGroup;
  constructor(private fb: FormBuilder) {
    this.addSkills = this.fb.group({
      skillName: ['', Validators.required],
    }) 
   }

  ngOnInit() {
  }

}
