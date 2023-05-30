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
    { nome: 'Projeto 1', data: new Date(), descricao: 'Descrição do Projeto 1', img: 'assets/2.png', tag: 'Tecnologia'  },
    { nome: 'Projeto 2', data: new Date(), descricao: 'Descrição do Projeto 2', img: 'assets/eu.jpg', tag: 'Tecnologia' },
    { nome: 'Projeto 3', data: new Date(), descricao: 'Descrição do Projeto 3', img: 'assets/augusto-dos-anjos.jpg', tag: 'Tecnologia' },
    { nome: 'Projeto 3', data: new Date(), descricao: 'Descrição do Projeto 3', img: 'assets/augusto-dos-anjos.jpg', tag: 'Tecnologia' },
  ]// ... mais projetos

}
