import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-profile-layer',
  templateUrl: './profile-layer.page.html',
  styleUrls: ['./profile-layer.page.scss'],
  standalone: false,
})
export class ProfileLayerPage implements OnInit {

  profileImage: string | null = null;
  currentDate: string = "";


  constructor(private router: Router,
    private profileService: ProfileService,
  ) {
    this.currentDate = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
   }

  ngOnInit() {
    this.profileService.profileImage$.subscribe(image => {
      this.profileImage = image || '../../../assets/images/Ellipse 2.png';
    });
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
