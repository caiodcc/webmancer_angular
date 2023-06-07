import { Component } from '@angular/core';
import  { faGithub} from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  iconGit = faGithub;
  projects = [
    { nome: 'Typescript Macronutrients Calculator', descricao: 'Typescript calculator to calculate the required amount of macronutrients for hypertrophy and other such goals.', img: 'assets/ts.png', tag: 'Technology', link: 'https://github.com/caiodcc/calculadora-dieta-flexivel'  },
    { nome: 'Angular CRUD', descricao: 'First CRUD in Angular, general study of the framework, directives, templates and HTTP communication', img: 'assets/ng.png', tag: 'Technology', link: 'https://github.com/caiodcc/crud_Angular' },
    { nome: 'This website!', descricao: 'Personal project for publishing own studies, contents and portfolio', img: 'assets/ng.png', tag: 'Technology', link: 'https://github.com/caiodcc/frontend_webmancer_angular'  },
    { nome: 'NestJS CRUD ', descricao: 'Backend study for personal project and portfolio', img: 'assets/nst.png', tag: 'Technology', link: 'https://github.com/caiodcc/backend_webmancer_nestjs' },
  ]// ... mais projetos

}
