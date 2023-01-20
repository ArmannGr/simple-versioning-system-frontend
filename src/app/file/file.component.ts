import { Component, OnInit } from '@angular/core';
import {EditFileComponent} from "../dialogs/edit-file/edit-file.component";
import {RevertFileComponent} from "../dialogs/revert-file/revert-file.component";
import {CompareFilesComponent} from "../dialogs/compare-files/compare-files.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FileVersion} from "../data/types/FileVersion";
import {FileService} from "../data/service/file.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  editFileRef: MatDialogRef<EditFileComponent> | undefined;
  revertFileRef: MatDialogRef<RevertFileComponent> | undefined;
  compareFileRef: MatDialogRef<CompareFilesComponent> | undefined;
  fileVersion: FileVersion[] = [];
  fileName: string = '';

  constructor(private dialog: MatDialog, private fileService: FileService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fileService.getAllFiles().subscribe(files => {
      this.route.params.subscribe( (params) => {
            this.fileVersion = files.filter(file => file.name === params['fileName'])[0].versions;
            this.fileVersion.sort((n1,n2) => {
              if (n1.versionId < n2.versionId) {
                return 1;
              }
              if (n1.versionId > n2.versionId) {
                return -1;
              }
              return 0;
            })
            this.fileName = params['fileName'];
      })
    })
  }

  editFile() {
    this.editFileRef = this.dialog.open(EditFileComponent);
  }

  revertFile() {
    this.revertFileRef = this.dialog.open(RevertFileComponent);
  }

  compareFiles() {
    this.compareFileRef = this.dialog.open(CompareFilesComponent);
  }

}
