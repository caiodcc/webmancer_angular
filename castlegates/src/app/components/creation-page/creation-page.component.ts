import { Component } from '@angular/core';
import { TextService, Text } from 'src/app/services/texto.service';

@Component({
  selector: 'app-creation-page',
  templateUrl: './creation-page.component.html',
  styleUrls: ['./creation-page.component.css']
})
export class CreationPageComponent {
  tags: string[] = ['Tecnologia', 'Filosofia', 'Cultura', 'Arte'];
  texts: any[] = [];
  
  text: any = {
    tag: null,
    titulo: '',
    id: 0,
    subtitulo: '',
    data: '',
    conteudo: ''
  };
  selectedTag: string;

  constructor(private textService: TextService) { }


  ngOnInit() {
    this.texts = this.textService.getAllTexts();
  }
  deleteText(index: number) {
    const text = this.texts[index];
    this.textService.deleteText(text.id);
    this.texts.splice(index, 1);
  }

  updateText(index: number) {
    const text = this.texts[index];
  
    this.textService.updateText(text);
    text.editing = false;
  }

  addText() {
    const newId = this.textService.getNewId();
    const newText = {
      id: newId,
      tag: this.selectedTag,
      titulo: this.text.titulo,
      subtitulo: this.text.subtitulo,
      data: this.text.data,
      conteudo: this.text.conteudo
    };

    this.textService.addText(newText);

    this.text = {
      id: 0,
      tag: null,
      titulo: '',
      subtitulo: '',
      data: '',
      conteudo: ''
    };
  }
}