import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  fullText = `${'Welcome to Clever CottonMouth!'}
  `;
  typedText = "";

  constructor() {
    let i = 0;
    const typing = setInterval(() => {
      this.typedText += this.fullText[i];
      i++;
      if (i === this.fullText.length) {
        clearInterval(typing);
      }
    }, 100);
  }

  downloadResume() {
    console.log("Download Resume");
  }
}
