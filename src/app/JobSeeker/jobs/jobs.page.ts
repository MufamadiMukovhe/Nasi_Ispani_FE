import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
  standalone: false,
})
export class JobsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //List of jobs
  jobs = [
    {
      title: 'IT Manager',
      company: 'Matjomane Construction',
      location: 'Pretoria, Gauteng, SA'
    },
    {
      title: 'Software Developer',
      company: 'Tech Solutions',
      location: 'Johannesburg, SA'
    },
    {
      title: 'Project Manager',
      company: 'BuildPro Inc.',
      location: 'Cape Town, SA'
    },{
    title: 'Graphic designer',
    company: 'Mfactory',
    location: 'Johannesburg, SA'
  },
  {
    title: 'Full stack develper inter',
    company: 'BuildPro Inc.',
    location: 'Cape Town, SA'
  },
  {
    title: 'IT Auditor',
    company: 'Interllect',
    location: 'Sandton'
  }
  ];

  toDetails() {
    this.router.navigate(['./job-details']);
  }
  

}
