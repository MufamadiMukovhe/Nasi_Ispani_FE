import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileImageSubject = new BehaviorSubject<string | null>(null); 
  profileImage$ = this.profileImageSubject.asObservable();

  setProfileImage(imageUrl: string | null) {
    this.profileImageSubject.next(imageUrl);
  }
  
  constructor() { }

}
