import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobAppliedPage } from './job-applied.page';

describe('JobAppliedPage', () => {
  let component: JobAppliedPage;
  let fixture: ComponentFixture<JobAppliedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAppliedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
