import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DiffEditorModel} from "ngx-monaco-editor";

@Component({
  selector: 'app-compare-files',
  templateUrl: './compare-files.component.html',
  styleUrls: ['./compare-files.component.css']
})
export class CompareFilesComponent implements OnInit {

  text1: string;

  text2: string;

  diffOptions = {
    theme: 'vs',
    language: 'plaintext',
    readOnly: true,
    renderSideBySide: true
  };

  //Model to save text1
  originalModel: DiffEditorModel = {
    code: '',
    language: 'plaintext'
  };

  //Model to save text2
  modifiedModel: DiffEditorModel = {
    code: '',
    language: 'plaintext'
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
    this.text1 = this.data.version1;
    this.text2 = this.data.version2;
  }

  ngOnInit(): void {
    console.log(this.text1, this.text2);
    this.originalModel = Object.assign({}, this.originalModel, {
      code: this.text1
    });
    this.modifiedModel = Object.assign({}, this.modifiedModel, {
      code: this.text2
    })


  }


  closeCancelAction(){
    this.text1 = '';
    this.text2 = '';
  }

}
