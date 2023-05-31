import { Component } from '@angular/core';
import { TextService } from 'src/app/services/texto.service';

@Component({
  selector: 'app-textos',
  templateUrl: './textos.component.html',
  styleUrls: ['./textos.component.css']
})
export class TextosComponent {
  dataTable: any[]; 
  texts: any[] = []; 
  filteredData: any[] = []; 
  selectedDate: string;
  searchText: string; 
  selectedTag: string; 

  constructor( private textService: TextService) {

  }
  ngOnInit(){
    this.texts = this.textService.getAllTexts();
  }

  filterData(searchText: string, searchTag: string, searchDate: string) {
    this.filteredData = this.texts.filter((item) => {
      // Verificar se o texto contém a tag selecionada
      if (this.selectedTag && item.tag !== this.selectedTag) {
        return false;
      }
  
      // Verificar se o texto contém o texto de busca
      if (searchText && !item.text.includes(searchText)) {
        return false;
      }
  
      // Todos os filtros passaram, manter o item no array filtrado
      return true;
    });
  }

}