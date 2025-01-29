import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchFormPage } from './search-form.page';

describe('SearchFormPage', () => {
  let component: SearchFormPage;
  let fixture: ComponentFixture<SearchFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
