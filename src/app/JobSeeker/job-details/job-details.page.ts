import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.page.html',
  styleUrls: ['./job-details.page.scss'],
  standalone: false,
})
export class JobDetailsPage implements OnInit {

  isLoading: boolean = false;
  constructor(private router: Router, private alertController: AlertController) { }

  salary: string =  'R 26 000';
      experience_lvl: string ='Intermediat';
      working_environment: string ='Fulltime';
      employmentCategories: string ='Permanent';

  ngOnInit() {
  }

  summary: String = "We are seeking a skilled and enthusiastic Java Software Engineer to join our dynamic team. In this role, you will design, develop, and maintain high-performance, scalable, and reliable software solutions. As part of our development team, you will collaborate with cross-functional teams to deliver innovative solutions that meet business needs and enhance user experience."

  applyJob(){
    this.isLoading= true;
    setTimeout(() =>{
     this.isLoading=false;
     this.router.navigate(['job-apply'])
    }, 3000)

  }
  
}
