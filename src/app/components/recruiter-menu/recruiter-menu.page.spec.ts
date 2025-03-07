import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecruiterMenuPage } from './recruiter-menu.page';

describe('RecruiterMenuPage', () => {
  let component: RecruiterMenuPage;
  let fixture: ComponentFixture<RecruiterMenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
