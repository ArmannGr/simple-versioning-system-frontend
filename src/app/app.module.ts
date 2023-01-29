import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {RouterOutlet} from "@angular/router";
import {FileLandingZoneComponent} from "./file-landing-zone/file-landing-zone.component";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from '@angular/material/dialog';
import { EditFileComponent } from './dialogs/edit-file/edit-file.component';
import { RevertFileComponent } from './dialogs/revert-file/revert-file.component';
import { CompareFilesComponent } from './dialogs/compare-files/compare-files.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {MatChipsModule} from "@angular/material/chips";
import { FileComponent } from './file/file.component';
import {FormsModule} from "@angular/forms";
import {MonacoEditorModule} from "ngx-monaco-editor";

@NgModule({
  declarations: [
    AppComponent,
    FileLandingZoneComponent,
    EditFileComponent,
    RevertFileComponent,
    CompareFilesComponent,
    FileComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatListModule,
        RouterOutlet,
        AppRoutingModule,
        HttpClientModule,
        MatDialogModule,
        MatIconModule,
        MatSnackBarModule,
        MatTableModule,
        MatChipsModule,
        FormsModule,
        MonacoEditorModule.forRoot()
    ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
