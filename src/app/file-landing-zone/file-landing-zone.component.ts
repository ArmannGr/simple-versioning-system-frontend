import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {EditFileComponent} from "../dialogs/edit-file/edit-file.component";
import {RevertFileComponent} from "../dialogs/revert-file/revert-file.component";
import {CompareFilesComponent} from "../dialogs/compare-files/compare-files.component";
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TextFile} from "../data/types/TextFile";
import { DatePipe } from '@angular/common';
import {FileVersion} from "../data/types/FileVersion";
import {FileService} from "../data/service/file.service";


@Component({
  selector: 'app-file-landing-zone',
  templateUrl: './file-landing-zone.component.html',
  styleUrls: ['./file-landing-zone.component.css']
})
export class FileLandingZoneComponent implements OnInit {

    fileCollection: string[] = ['Datei1_v1.txt', 'Datei7_v1.txt', 'DateiA_v2.txt', 'Datei1_v2.txt', 'Datei7_v2.txt', 'DateiA_v3.txt', 'Datei1_v3.txt', 'Datei7_v3.txt', 'DateiA_v5.txt'];
    editFileRef: MatDialogRef<EditFileComponent> | undefined;
    revertFileRef: MatDialogRef<RevertFileComponent> | undefined;
    compareFileRef: MatDialogRef<CompareFilesComponent> | undefined;
    newTextFile: TextFile;
    newFileVersion: FileVersion;
    fileVersions: FileVersion[];



    constructor(private dialog: MatDialog, private http: HttpClient, private _snackBar: MatSnackBar,
                public datePipe: DatePipe, private fileService: FileService) {
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
    openSnackBar() {
        const message  = 'Nur Textdateien'
        const action = 'ok'
        this._snackBar.open(message, action,{
            duration: 2000
        });
    }

    ngOnInit(): void {
    }

    onFileSelected(event) {

        const files: File[] = event.target.files;

        if (Array.from(files).every(value => value.name.includes(".txt"))) {
                let file = event.target.files[0];

                let fileReader = new FileReader();
                fileReader.onload = () => {
                    let currentDateTime =this.datePipe.transform((new Date), 'dd/MM/yyyy h:mm:ss');
                    this.newFileVersion = new FileVersion(1, fileReader.result.toString(), currentDateTime);
                    this.fileVersions = [];
                    this.fileVersions.push(this.newFileVersion);
                    this.newTextFile = new TextFile(file.name, currentDateTime, this.fileVersions, null, null);
                    this.fileService.addFile(this.newTextFile).subscribe( response => {
                        console.log(response);
                    })
                }
                fileReader.readAsText(file);
        } else {
            this.openSnackBar();
        }
    }
}
