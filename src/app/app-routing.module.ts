import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./JobSeeker/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logo-component',
    loadChildren: () => import('./components/logo-component/logo-component.module').then( m => m.LogoComponentPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./JobSeeker/sign-up/sign-up.module').then( m => m.SignUpPageModule),

  },
  {
    path: 'landing-page',
    loadChildren: () => import('./JobSeeker/landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  },
  {
    path: 'profile-layer',
    loadChildren: () => import('./components/profile-layer/profile-layer.module').then( m => m.ProfileLayerPageModule)
  },
  {
    path: 'jobs',
    loadChildren: () => import('./JobSeeker/jobs/jobs.module').then( m => m.JobsPageModule)
  },
  {
    path: 'job-details',
    loadChildren: () => import('./JobSeeker/job-details/job-details.module').then( m => m.JobDetailsPageModule)
  },
  {
    path: 'search-form',
    loadChildren: () => import('./components/search-form/search-form.module').then( m => m.SearchFormPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./JobSeeker/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./components/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./JobSeeker/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'edit-education',
    loadChildren: () => import('./JobSeeker/edit-education/edit-education.module').then( m => m.EditEducationPageModule)
  },
  {
    path: 'add-education',
    loadChildren: () => import('./JobSeeker/add-education/add-education.module').then( m => m.AddEducationPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./JobSeeker/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'add-experience',
    loadChildren: () => import('./JobSeeker/add-experience/add-experience.module').then( m => m.AddExperiencePageModule)
  },
  {
    path: 'add-skills',
    loadChildren: () => import('./JobSeeker/add-skills/add-skills.module').then( m => m.AddSkillsPageModule)
  },
  {
    path: 'add-document',
    loadChildren: () => import('./JobSeeker/add-document/add-document.module').then( m => m.AddDocumentPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
