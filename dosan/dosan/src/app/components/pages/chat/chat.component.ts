import { Component } from '@angular/core';
import { API_KEY } from 'src/app/services/env';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  // Variables 
  userInput: string = '';
  chatHistory: string[] = [];


 // End variables
  async sendMessage() {
    const apiKey = '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';
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        prompt: this.userInput,
        max_tokens: 50,
        temperature: 0.7,
        n: 1
      })
    };

    try {
      const response = await fetch(apiUrl, requestOptions);
      const data = await response.json();
    
      if (data.choices && data.choices.length > 0) {
        const answer = data.choices[0].text.trim();
        this.chatHistory.push(this.userInput, answer);
      } else {
        // Tratar o caso em que não há resposta válida
        console.error('Error: No valid response');
      }
    
      this.userInput = '';
    } catch (error) {
      console.error('Error:', error);
    }
  }}