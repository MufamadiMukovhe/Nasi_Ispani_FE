import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoComponentPage } from './logo-component.page';

describe('LogoComponentPage', () => {
  let component: LogoComponentPage;
  let fixture: ComponentFixture<LogoComponentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
