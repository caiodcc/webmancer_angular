import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  private texts: Text[] = [];
  private nextId = 1;

  getAllTexts(): Text[] {
    return this.texts;
  }

  addText(text: Text) {
    this.texts.push(text);
  }
  updateText(text: Text) {
    // Encontrar o índice do texto no array
    const index = this.texts.findIndex(t => t.id === text.id);
    if (index !== -1) {
      // Atualizar o texto no array
      this.texts[index] = text;
    }
  }

  deleteText(id: number) {
    // Filtrar o array para remover o texto com o ID correspondente
    this.texts = this.texts.filter(text => text.id !== id);
  }

  getNewId(): number {
    return this.nextId++;
  }

}

 

export interface Text {
  titulo: string;
  id: number;
  subtitulo: string;
  conteudo: string;
  tag: string;
}