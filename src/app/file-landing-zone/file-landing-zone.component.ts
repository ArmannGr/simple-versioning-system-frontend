import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-landing-zone',
  templateUrl: './file-landing-zone.component.html',
  styleUrls: ['./file-landing-zone.component.css']
})
export class FileLandingZoneComponent implements OnInit {

  fileCollection: string[] = ['Datei1_v1.txt', 'Datei7_v1.txt', 'DateiA_v2.txt'];


  constructor() {}



  ngOnInit(): void {
  }

}
