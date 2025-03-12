import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

   loginForm: FormGroup;
   errorMessage: String = '';
   isLoading: boolean = false;

 
   //Constant loging in details
   private readonly validEmail = "mukovhemufamadi@gmail.com";
   private readonly validPassword = "1027";


   constructor(private fb: FormBuilder, 
    private router: Router,
    private spinner: NgxSpinnerService
   ) {
     this.loginForm = this.fb.group({
       email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required]],
     });
   }

  ngOnInit() {
   
  }

  login() {
    this.isLoading = true;
    setTimeout(() => {
      const { email, password } = this.loginForm.value;
  
      if (email === this.validEmail && password === this.validPassword) {
        this.errorMessage = ''; 
        this.router.navigate(['/landing-page']);
      } else if (email === '01crusaders@gmail.com' && password === '1027') {
        this.errorMessage = '';
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = 'Invalid credentials';
      }
  
      this.isLoading = false; 
    }, 3000);
  }
  

}
