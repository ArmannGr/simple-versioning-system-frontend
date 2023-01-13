import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Versionsverwaltung';

  fileCollection: string[] = ['Datei1_v1.txt', 'Datei7_v1.txt', 'DateiA_v2.txt'];

}
