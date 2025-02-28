import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
  standalone: false,
})
export class LandingPagePage implements OnInit{

 
  constructor(private router: Router) { }

  jobs = [
    {
      title: 'IT Manager',
      company: 'Matjomane Construction',
      location: 'Pretoria, Gauteng, SA', 
      salary: 'R 40 000',
      experience_lvl: 'Senior',
      working_environment: 'Remote',
      employmentCategories: 'Permanent',
      time: '2 hours'
    },
    {
      title: 'Software Developer',
      company: 'Tech Solutions',
      location: 'Johannesburg, SA',
      salary: 'R 18 000',
      experience_lvl: 'Intermediate',
      working_environment: 'Hybrid',
      employmentCategories: 'Temporary',
      time: '6 hours'

    }
  ]

  jobsApplied = [
    {
      title: 'Graphic designer',
      company: 'TechInc Construction',
      location: 'Polokwane', 
      salary: 'R 12 000',
      experience_lvl: 'Entry',
      working_environment: 'Fulltime',
      employmentCategories: 'Permanent',
      time: '2 hours'
    },
    {
      title: 'Software Developer',
      company: 'Tech Solutions',
      location: 'Johannesburg, SA',
      salary: 'R 18 000',
      experience_lvl: 'Intermediate',
      working_environment: 'Hybrid',
      employmentCategories: 'Temporary',
      time: '6 hours'

    }
  ]



  ngOnInit() {
  }

  
  //Routes
  toJobsApplied()
  {
    this.router.navigate(['/job-applied'])
  }

  toDetails(){
    this.router.navigate(['/job-details'])
  }

  toJobs(){
    this.router.navigate(['/jobs'])
  }
}
