import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { NoFoundComponent } from './no-found/no-found.component';
import { ContactComponent } from './contact/contact.component';
import { LogoutComponent } from './logout/logout.component';
import { mainGuard } from './auth/main.guard';
import { ProjectComponent } from "./project/project.component";
import { AngularFireAuthGuard, redirectUnauthorizedTo } from "@angular/fire/compat/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login'])

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'about-me', component: AboutComponent },
  { path: 'contact-me', component: ContactComponent },
  { path: 'projects', canActivate: [mainGuard, AngularFireAuthGuard], component: ProjectComponent, data: { authGuardPipe: redirectUnauthorizedToLogin}},
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: NoFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
