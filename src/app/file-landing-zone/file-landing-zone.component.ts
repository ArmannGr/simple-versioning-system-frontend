import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
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
    fileCollection: TextFile[] = [];
    newTextFile: TextFile;
    newFileVersion: FileVersion;
    fileVersions: FileVersion[];



    constructor(private dialog: MatDialog, private http: HttpClient, private _snackBar: MatSnackBar,
                public datePipe: DatePipe, private fileService: FileService) {
    }
    openSnackBar() {
        const message  = 'Nur Textdateien'
        const action = 'ok'
        this._snackBar.open(message, action,{
            duration: 2000
        });
    }

    ngOnInit(): void {
        this.fileService.getAllFiles().subscribe(files => {
            this.fileCollection = files;
        })
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
                        window.location.reload();
                    })
                }
                fileReader.readAsText(file);
        } else {
            this.openSnackBar();
        }
    }
}
