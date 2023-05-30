import { Component } from '@angular/core';
import  {faLinkedin, faGithub, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  iconGit = faGithub;
  iconLink = faLinkedin;
  iconWp = faWhatsapp;


}
