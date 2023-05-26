import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationPageComponent } from './components/creation-page/creation-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { TextosComponent } from './components/textos/textos.component';
import { ProjectComponent } from './components/project/project.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'creation-page', component: CreationPageComponent},
  {path: 'home', component:HomePageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'text', component: TextosComponent},
  {path: 'project', component: ProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
