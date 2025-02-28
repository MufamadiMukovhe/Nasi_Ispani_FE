import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone:false,
})
export class SignUpPage implements OnInit {

regForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.regForm = this.fb.group({
        fullName:['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        confirm_password: ['',[Validators.required]]
    })
  }

  ngOnInit() {
  }

}
