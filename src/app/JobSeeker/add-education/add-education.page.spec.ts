import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEducationPage } from './add-education.page';

describe('AddEducationPage', () => {
  let component: AddEducationPage;
  let fixture: ComponentFixture<AddEducationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEducationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
