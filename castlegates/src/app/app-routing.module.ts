import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationPageComponent } from './components/creation-page/creation-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { TextosComponent } from './components/textos/textos.component';
import { TextReadComponent } from './components/text-read/text-read.component';
import { ProjectsComponent } from './components/projects/projects.component';


const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'creation-page', component: CreationPageComponent},
  {path: 'home', component:HomePageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'collect', component: TextosComponent},
  {path: 'text-read', component: TextReadComponent},
  {path: 'projects', component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
