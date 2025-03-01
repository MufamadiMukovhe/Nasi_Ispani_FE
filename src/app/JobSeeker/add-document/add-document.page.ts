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

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController,
    private router: Router
  ) {
    this.addDocument = this.fb.group({
      resume: ['', Validators.required],
      qualification: ['', Validators.required],
      grade12: ['', Validators.required],
      otherDocuments: ['', Validators.required],
    });
  }

  ngOnInit() {}

  async onResumeFileSelected(event: Event): Promise<void> {
    await this.validateFile(event, 'resume');
  }

  async onQualificationFileSelected(event: Event): Promise<void> {
    await this.validateFile(event, 'qualification');
  }

  async onGrade12FileSelected(event: Event): Promise<void> {
    await this.validateFile(event, 'grade12');
  }

  async onOtherDocumentFileSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      if (input.files.length > 3) {
        await this.showAlert('Upload Limit Exceeded', 'You can only upload up to 3 documents.');
        input.value = '';
        return;
      }

      const invalidFiles = Array.from(input.files).filter(file => !this.isValidFileType(file));
      if (invalidFiles.length > 0) {
        await this.showAlert('Invalid File Type', 'Only .pdf and .docx files are allowed.');
        input.value = '';
        return;
      }

      this.uploadedOtherDoc = Array.from(input.files).map(file => file.name).join(', ');
    }
  }

  private async validateFile(event: Event, field: 'resume' | 'qualification' | 'grade12'): Promise<void> {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (!this.isValidFileType(file)) {
        await this.showAlert('Invalid File Type', 'Only .pdf and .docx files are allowed.');
        input.value = ''; // Reset the file input
        return;
      }

      if (field === 'resume') this.uploadedResumeFileName = file.name;
      if (field === 'qualification') this.uploadedQualificationFileName = file.name;
      if (field === 'grade12') this.uploadedGrade12 = file.name;
    }
  }

  private isValidFileType(file: File): boolean {
    const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    return allowedTypes.includes(file.type);
  }

  private async showAlert(header: string, message: string): Promise<void> {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
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
