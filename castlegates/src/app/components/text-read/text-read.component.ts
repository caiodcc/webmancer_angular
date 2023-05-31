import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-text-read',
  templateUrl: './text-read.component.html',
  styleUrls: ['./text-read.component.css']
})
export class TextReadComponent {
  text: any; // Objeto de texto com título, data e conteúdo

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const textId = params.get('id');
      // Use o ID do texto para carregar os dados necessários para exibir o texto
      this.text = {
        title: 'Título do Texto',
        date: '31 de Maio de 2023',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat leo vel arcu volutpat iaculis. Donec rutrum tincidunt purus, id commodo odio tincidunt vitae. Aliquam eleifend bibendum tempor. Morbi tempor, nisl eu ultricies commodo, dui tortor auctor nulla, id tristique dolor nunc ac enim.'
      };
    });
  }
}




