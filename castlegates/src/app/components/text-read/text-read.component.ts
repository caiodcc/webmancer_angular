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
        id: this.text.id,
        tag: this.text.tag,
        titulo: this.text.titulo,
        subtitulo: this.text.subtitulo,
        data: this.text.data,
        conteudo: this.text.conteudo
      };
    });
  }
}




