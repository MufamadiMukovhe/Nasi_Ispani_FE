import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile-layer',
  templateUrl: './profile-layer.page.html',
  styleUrls: ['./profile-layer.page.scss'],
  standalone: false,
})
export class ProfileLayerPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  isDropdownVisible = false;

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  toProfile(){
    this.router.navigate(['./profile']);
  }

  logout(){
    this.router.navigate(['./login']);
  }


}
