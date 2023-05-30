import { Component } from '@angular/core';

@Component({
  selector: 'app-textos',
  templateUrl: './textos.component.html',
  styleUrls: ['./textos.component.css']
})
export class TextosComponent {
  dataTable: any[]; // Array para armazenar os dados do JSON
  filteredData: any[]; // Array para armazenar os resultados filtrados
  selectedDate: string; // Propriedade para armazenar a data selecionada
  searchText: string; // Propriedade para armazenar o texto de busca
  selectedTag: string; // Propriedade para armazenar a tag selecionada

  constructor() {
    // Aqui você pode carregar seus dados do JSON, por exemplo:
    this.dataTable = [
      { text: 'Texto 1', date: '2023-05-01', tag: 'Tecnologia' },
      { text: 'Texto 2', date: '2023-05-02', tag: 'Filosofia' },
      { text: 'Texto 3', date: '2023-05-03', tag: 'Arte' },
      // ... mais dados do JSON
    ];

    // Inicialmente, os resultados filtrados serão iguais aos dados completos
    this.filteredData = this.dataTable;
  }

  filterData(searchText: string, searchTag: string, searchDate: string) {
    this.filteredData = this.dataTable.filter(item => {
      // Filtrar por texto
      if (searchText && !item.text.toLowerCase().includes(searchText.toLowerCase())) {
        return false;
      }
      
      // Filtrar por tag
      if (searchTag && item.tag !== searchTag) {
        return false;
      }

      // Filtrar por data
      if (searchDate && item.date !== searchDate) {
        return false;
      }

      return true;
    });
  }
}
