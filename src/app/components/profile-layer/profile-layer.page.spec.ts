import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileLayerPage } from './profile-layer.page';

describe('ProfileLayerPage', () => {
  let component: ProfileLayerPage;
  let fixture: ComponentFixture<ProfileLayerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
