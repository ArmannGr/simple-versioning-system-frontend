import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import { AddFileComponent} from "../dialogs/add-file/add-file.component";
import {EditFileComponent} from "../dialogs/edit-file/edit-file.component";
import {RevertFileComponent} from "../dialogs/revert-file/revert-file.component";
import {CompareFilesComponent} from "../dialogs/compare-files/compare-files.component";

@Component({
  selector: 'app-file-landing-zone',
  templateUrl: './file-landing-zone.component.html',
  styleUrls: ['./file-landing-zone.component.css']
})
export class FileLandingZoneComponent implements OnInit {


  fileCollection: string[] = ['Datei1_v1.txt', 'Datei7_v1.txt', 'DateiA_v2.txt', 'Datei1_v2.txt', 'Datei7_v2.txt', 'DateiA_v3.txt', 'Datei1_v3.txt', 'Datei7_v3.txt', 'DateiA_v5.txt'];


  // Refs for Dialogs
  addFileRef: MatDialogRef<AddFileComponent> | undefined;
  editFileRef: MatDialogRef<EditFileComponent> | undefined;
  revertFileRef: MatDialogRef<RevertFileComponent> | undefined;
  compareFileRef: MatDialogRef<CompareFilesComponent> | undefined;

  constructor(private dialog: MatDialog) {}

    //dialog methods
openNewFile(){
    this.addFileRef = this.dialog.open(AddFileComponent);
}

editFile(){
    this.editFileRef = this.dialog.open(EditFileComponent);
}

revertFile(){
    this.revertFileRef = this.dialog.open(RevertFileComponent);
}

compareFiles(){
      this.compareFileRef = this.dialog.open(CompareFilesComponent);
}

  ngOnInit(): void {
  }

}
