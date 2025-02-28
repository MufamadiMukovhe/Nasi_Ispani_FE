import { Component, HostListener, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.page.html',
  styleUrls: ['./search-form.page.scss'],
  standalone: false,
})
export class SearchFormPage implements OnInit {


  @Output() searchEvent = new EventEmitter<{ 
    title: string; 
    location: string; 
    employmentType: string; 
    environmentType: string;
    experienceLevel: string;

   
  }>();
  
  titleQuery: string = '';
  locationQuery: string = '';
  isLoading: boolean = false;


  filterForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.filterForm = this.fb.group({
      employment_type: [''],
      location: [''],
      experienceLevel: [''],
      environmentType: [''],
      startDate: [''],
      endDate: [''],
    })
  }

  ngOnInit() {
  }

  isOpened: boolean = false;

  toggleFilter() {
    this.isOpened = !this.isOpened;
  }

  /*@HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    if (!(event.target as HTMLElement).closest('.filter-button')) {
      this.isOpened = false;
    }
  }*/

  close(){
    this.isOpened = false;
    }
    
    clearForm() {
      this.isLoading = true;
      setTimeout(() => {
      this.filterForm.reset(); 
      this.titleQuery = ''; 
      this.locationQuery = ''; 
      this.searchEvent.emit({ title: '', location: '', employmentType: '', environmentType: '', experienceLevel: ''}); 
      this.isLoading = false;
    }, 3000); 
    this.isOpened = false;

    }
    
    onSearch() {
      this.isLoading = true;
      setTimeout(() => {
        this.searchEvent.emit({ 
          title: this.titleQuery, 
          location: this.filterForm.get('location')?.value || '', 
          employmentType: this.filterForm.get('employment_type')?.value || '', 
          environmentType: this.filterForm.get('environmentType')?.value || '',
          experienceLevel: this.filterForm.get('experienceLevel')?.value || '',
        });
        this.isLoading = false;
      }, 3000);
    
      this.isOpened = false;
    }
    
}
