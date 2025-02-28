import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.page.html',
  styleUrls: ['./add-document.page.scss'],
  standalone: false,
})
export class AddDocumentPage implements OnInit {
  isLoading: boolean = false;
  addDocument: FormGroup;
  
  uploadedResumeFileName: string | null = null;
  uploadedQualificationFileName: string | null = null;
  uploadedGrade12: string | null = null;
  uploadedOtherDoc: string | null = null;

  constructor(private fb: FormBuilder, private alertController: AlertController, 
    private router: Router
  ) {
    this.addDocument = this.fb.group({
      resume: ['', Validators.required],
      qualification: ['', Validators.required],
      grade12: ['', Validators.required],
      otherDocuments: ['', Validators.required]
    });
  }
  
  ngOnInit() {}

  onResumeFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.uploadedResumeFileName = input.files[0].name;
    }
  }

  onQualificationFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.uploadedQualificationFileName = input.files[0].name;
    }
  }

  onGrade12FileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.uploadedGrade12 = input.files[0].name;
    }
  }


  onOtherDocumentFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    
    if (input.files) {
      if (input.files.length > 3) {
        alert("You can only upload up to 3 documents.");
        input.value = ''; 
        return;
      }
      this.uploadedOtherDoc = Array.from(input.files).map(file => file.name).join(', ');
    }
  }
  


  // Save Function
  async onSave() {
    this.isLoading = true;

    setTimeout(async () => {
      this.isLoading = false;

      const alert = await this.alertController.create({
        header: 'Success',
        message: 'Documents successfully added',
        buttons: [],
      });

      await alert.present();
      setTimeout(() => {
        alert.dismiss();
        this.router.navigate(['/add-documents']);
      }, 2000);
      
    }, 3000);
  }
}
