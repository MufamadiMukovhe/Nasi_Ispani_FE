import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruiter-menu',
  templateUrl: './recruiter-menu.page.html',
  styleUrls: ['./recruiter-menu.page.scss'],
  standalone: false,
})
export class RecruiterMenuPage implements OnInit {

   constructor(private router: Router) { }
  
    ngOnInit() {
    }
  
   isActive(route: string):boolean{
    return this.router.url === route;
   }
}
