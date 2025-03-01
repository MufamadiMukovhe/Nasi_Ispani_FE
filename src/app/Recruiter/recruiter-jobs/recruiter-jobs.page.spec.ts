import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecruiterJobsPage } from './recruiter-jobs.page';

describe('RecruiterJobsPage', () => {
  let component: RecruiterJobsPage;
  let fixture: ComponentFixture<RecruiterJobsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterJobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
