import { Component,ViewEncapsulation, OnInit, Inject} from '@angular/core';
import {DiffEditorModel} from "ngx-monaco-editor";
import {FileVersion} from "../../data/types/FileVersion";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-file',
  templateUrl: './edit-file.component.html',
  styleUrls: ['./edit-file.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditFileComponent implements OnInit {

  // from injected object
  OBJ_versionId: number;
  OBJ_fileContent: string;
  OBJ_lastUpdatedAt: string;



  //only for testing
  ersteFile: FileVersion = {
    versionId:  0,
    fileContent: "Das ist der erste Test",
    lastUpdatedAt: "20220120"

  };

  textfileContent = '';

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



  constructor(@Inject(MAT_DIALOG_DATA) public data: FileVersion) {
    this.OBJ_versionId = this.data.versionId;
    this.OBJ_fileContent = this.data.fileContent;
    this.OBJ_lastUpdatedAt = this.data.lastUpdatedAt;
  }

  ngOnInit(): void {
    this.textfileContent = this.ersteFile.fileContent;
  }

  closeSaveAction(){
    //save the changes made to the file

    console.log("Editor saved");
    console.log(this.textfileContent);
  }

  closeCancelAction(){
    //just go back and close the dialog
    console.log("Editor closed");

  }


}
