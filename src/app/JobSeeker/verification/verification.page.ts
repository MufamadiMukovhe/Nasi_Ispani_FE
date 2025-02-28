import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
  standalone: false,
})
export class VerificationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  maskEmail(email: string): string {
    const [localPart, domain] = email.split("@"); 
    if (localPart.length < 2) return email; 
  
    const maskedPart = "*".repeat(localPart.length - 1); 
    return `${localPart[0]}${maskedPart}@${domain}`; 
  }
  
  email = this.maskEmail("mukovhemufamadi@gmail.com"); 

  moveFocus(event: any, nextIndex: number): void {
    const currentInput = event.target;
    if (currentInput.value.length === 1 && nextIndex < 4) { 
      const nextInput = document.getElementsByClassName('otp-input')[nextIndex] as HTMLInputElement;
      nextInput.focus();
    }
  }
}
