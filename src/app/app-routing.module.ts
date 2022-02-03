import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FacebookGuard } from './guards/facebook.guard';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';

//https://www.youtube.com/watch?v=XQA1bbHQJp0&t=1136s (10.52 dk)

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    /* loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule), */
    canActivate: [FacebookGuard],
  },
  {
    path: 'login',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AppRoutingModule {}
