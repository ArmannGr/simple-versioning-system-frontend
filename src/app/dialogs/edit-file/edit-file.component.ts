import { Component, OnInit,Inject, ViewEncapsulation } from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FileVersion} from "../../data/types/FileVersion";


@Component({
  selector: 'app-edit-file',
  templateUrl: './edit-file.component.html',
  styleUrls: ['./edit-file.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditFileComponent implements OnInit {

  // from injected object
  OBJ_versionId: number;      //das ist die Version von der Textfile

  OBJ_name: string;

  versions: FileVersion[];

  text: string;

  //input
  inputOptions = {
    theme: 'vs',
    language: 'plaintext',
    minimap: {
      enabled: false
    },
    scrollbar: {
      useShadows: false,
      verticalHasArrows: false,
      horizontalHasArrows: false,
      vertical: 'hidden',
      horizontal: 'hidden'
    }
  };

//Zugriff auf die übergebenen Daten
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.OBJ_versionId = this.data.versionId;
    this.OBJ_name = this.data.name;
    this.versions = this.data.versions;
    this.text = this.versions[0].lastUpdatedAt;  //später durch fileContent ersetzen !

  }

  ngOnInit(): void {
    console.log('OBJ_VersionId: ' , this.OBJ_versionId, this.OBJ_name, this.versions[0].versionId, this.versions[0].fileContent, this.versions[0].lastUpdatedAt);
  }

  closeSaveAction(){
    //save the changes made to the file

    console.log("Editor saved");
    console.log(this.text);
  }

  closeCancelAction(){
    //just go back and close the dialog
    console.log("Editor closed");

  }

}
