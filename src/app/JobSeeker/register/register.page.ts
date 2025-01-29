import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone:false,
})
export class RegisterPage implements OnInit {

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
