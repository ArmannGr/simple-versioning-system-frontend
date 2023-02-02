import { Component, OnInit,Inject, ViewEncapsulation } from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FileVersion} from "../../data/types/FileVersion";
import {TextFile} from "../../data/types/TextFile";
import { FileService} from "../../data/service/file.service";
import {FileComponent} from "../../file/file.component";


@Component({
  selector: 'app-edit-file',
  templateUrl: './edit-file.component.html',
  styleUrls: ['./edit-file.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditFileComponent implements OnInit {

  OBJ_name: string;

  selectedTextfile: TextFile;

  versions: FileVersion[];

  text: string;

  result: any;

  //input settings for the editor
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

//access to the data
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fileService: FileService) {
    this.selectedTextfile = this.data.textfile;
    this.versions = this.data.versions;
    this.text = this.versions[0].fileContent;  //später durch fileContent ersetzen !
    this.OBJ_name = this.selectedTextfile.name;

  }

  ngOnInit(): void {
   // console.log('OBJ_VersionId: ' , this.OBJ_versionId, this.OBJ_name, this.versions[0].versionId, this.versions[0].fileContent, this.versions[0].lastUpdatedAt);
  }

  closeSaveAction(){
    //save the changes made to the file
    this.fileService.editFileAndUnlock(this.selectedTextfile, this.text).subscribe(res => this.result = res.toString());
    console.log("Editor saved     " + this.result);

  }

  closeCancelAction(){
    //just go back and close the dialog
    this.fileService.unlockFile(this.selectedTextfile).subscribe(res => this.result = res.toString());
    console.log("Editor closed");
    console.log(this.result);


  }

}
