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
    { nome: 'Calculadora Flexível em Typescript', data: new Date(), descricao: 'Descrição do Projeto 1', img: 'assets/2.png', tag: 'Tecnologia'  },
    { nome: 'CRUD Simples no Angular', data: new Date(), descricao: 'Descrição do Projeto 2', img: 'assets/eu.jpg', tag: 'Tecnologia' },
    { nome: 'Este website!', data: new Date(), descricao: 'Descrição do Projeto 3', img: 'assets/augusto-dos-anjos.jpg', tag: 'Tecnologia' },
    { nome: 'CRUD Simples no Java ', data: new Date(), descricao: 'Descrição do Projeto 3', img: 'assets/augusto-dos-anjos.jpg', tag: 'Tecnologia' },
  ]// ... mais projetos

}
