import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  fullText = `${'Welcome to Clever CottonMouth!'}
  `;
  typedText = "";

  constructor(
    private router: Router
  ) {

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

  redirect=()=>{
    // console.log("Redirecting to the contact page", event.target.innerText);
    // console.log("Redirecting to the contact page");
    // if(event.target.innerText == "About"){
      console.log("Redirecting to the about page");
       this.router.navigate(['/login']);
      // window.location.href = "http://localhost:4200/login";

    // }
  }
}
