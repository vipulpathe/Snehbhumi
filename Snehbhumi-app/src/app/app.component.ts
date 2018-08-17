import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Snehbhumi-app';
  faCoffee = faCoffee;
}
