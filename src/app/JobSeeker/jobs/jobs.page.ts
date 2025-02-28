import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
  standalone: false,
})
export class JobsPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  //List of jobs
  jobs = [
    {
      title: 'IT Manager',
      company: 'Matjomane Construction',
      location: 'Pretoria, Gauteng, SA',
      salary: 'R 18 000',
      experience_lvl: 'Intermediate',
      working_environment: 'Hybrid',
      employmentCategories: 'Temporary',
      time: '6 hours'
    },
    {
      title: 'Software Developer',
      company: 'Tech Solutions',
      location: 'Johannesburg, SA',
      salary: 'R 18 000',
      experience_lvl: 'Entry',
      working_environment: 'Hybrid',
      employmentCategories: 'Contract',
      time: '4 hours'
    },
    {
      title: 'Project Manager',
      company: 'BuildPro Inc.',
      location: 'Cape Town, SA',
      salary: 'R 30 000',
      experience_lvl: 'Intermediate',
      working_environment: 'Remote',
      employmentCategories: 'Temporary',
      time: '6 hours'
    },{
    title: 'Graphic designer',
    company: 'Mfactory',
    location: 'Johannesburg, SA',
    salary: 'R 18 000',
    experience_lvl: 'Intermediate',
    working_environment: 'Hybrid',
    employmentCategories: 'Contract',
    time: '6 hours'
  },
  {
    title: 'Full stack develper inter',
    company: 'BuildPro Inc.',
    location: 'Cape Town, SA',
    salary: 'R 35 000',
    experience_lvl: 'Senior',
    working_environment: 'Hybrid',
    employmentCategories: 'Temporary',
    time: '4 days'
  },
  {
    title: 'IT Auditor',
    company: 'Interllect',
    location: 'Sandton',
    salary: 'R 20 000',
    experience_lvl: 'Entry',
    working_environment: 'Remote',
    employmentCategories: 'Permanent',
    time: '6 days'
  }
  ];

  toDetails() {
    this.router.navigate(['./job-details']);
  }

   //Search for Jobs
   filteredJobs = [...this.jobs]; 
   
  onSearch(query: string, location?: string, employmentType?: string, environmentType?: string, experienceLevel?: string) {
    if (!query && !location && !employmentType && !environmentType && !experienceLevel) {
      this.filteredJobs = this.jobs;
      return;
    }
  
    const searchLower = query ? query.trim().toLowerCase() : '';
    const locationLower = location ? location.trim().toLowerCase() : '';
    const employmentTypeLower = employmentType ? employmentType.trim().toLowerCase() : '';
    const environmentTypeLower = environmentType ? environmentType.trim().toLowerCase() : '';
    const experienceLevelLower = experienceLevel ? experienceLevel.trim().toLowerCase() : '';


    

   
    this.filteredJobs = this.jobs.filter(job => {
      const matchesTitle = searchLower ? job.title?.trim().toLowerCase().includes(searchLower) : true;
      const matchesLocation = locationLower ? job.location?.trim().toLowerCase().includes(locationLower) : true;
      const matchesEmploymentType = employmentTypeLower ? job.employmentCategories?.trim().toLowerCase() === employmentTypeLower : true;
      const matchesEnvironmentType = environmentTypeLower ? job.working_environment?.trim().toLowerCase() === environmentTypeLower : true;
      const matchesExperienceType = experienceLevelLower ? job.experience_lvl?.trim().toLowerCase() === experienceLevelLower : true;

      
      return matchesTitle && matchesLocation && matchesEmploymentType && matchesEnvironmentType && matchesExperienceType;
    });
  
    console.log("Filtered Jobs:", this.filteredJobs);
  }
  
   //delete job
   async confirmDelete(job: any) {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: `Are you sure you want to delete "${job.title}"?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Deletion cancelled');
          }
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.deleteJob(job);
          }
        }
      ]
    });

    await alert.present();
  }

  deleteJob(job: any) {
    this.filteredJobs = this.filteredJobs.filter(j => j !== job);
    //console.log(`Deleted: ${job.title}`);
  }

}
