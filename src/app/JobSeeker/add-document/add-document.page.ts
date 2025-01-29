import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.page.html',
  styleUrls: ['./add-document.page.scss'],
  standalone: false,
})
export class AddDocumentPage implements OnInit {

  addDocument: FormGroup;
  constructor(private fb: FormBuilder) {
    this.addDocument = this.fb.group({
      document: ['', Validators.required],
      type: ['', Validators.required],
     
    })
   }
  ngOnInit() {
  }

  uploadedFileName: string | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.uploadedFileName = input.files[0].name;
    }
  }
}
