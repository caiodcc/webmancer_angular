import { Component } from '@angular/core';

@Component({
  selector: 'app-textos',
  templateUrl: './textos.component.html',
  styleUrls: ['./textos.component.css']
})
export class TextosComponent {
  articles = [
    {
      title: 'Artigo 1',
      tags: ['Angular', 'Bootstrap', 'Responsividade'],
      author: 'João',
      data: new Date
    },
    {
      title: 'Artigo 2',
      tags: ['TypeScript', 'HTML', 'CSS'],
      author: 'Maria',
      data: new Date
    },
    {
      title: 'Artigo 3',
      tags: ['JavaScript', 'Frontend'],
      author: 'Pedro',
      data: new Date
    }
  ];

}
