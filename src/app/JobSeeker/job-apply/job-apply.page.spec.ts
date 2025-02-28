import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobApplyPage } from './job-apply.page';

describe('JobApplyPage', () => {
  let component: JobApplyPage;
  let fixture: ComponentFixture<JobApplyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JobApplyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
