import { Injectable } from '@angular/core';
import {TextFile} from "../types/TextFile";
import {HttpClient} from "@angular/common/http";
import * as url from "url";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  addFile(textFile: TextFile){
    return(this.http.post('api/addFile', textFile));
  }

  getAllFiles(){
    return(this.http.get<any>('api/getAllFiles'));
  }

  resetFileToFormerVersion(textFile: TextFile, versionId: number){
    return(this.http.post('api/resetFileToFormerVersion/' + versionId, textFile));
  }

    //lock existing textfile for edit
  lockFile(textfile: TextFile){
    return(this.http.post('api/lockFile', textfile));
  }

  editFileAndUnlock(textfile: TextFile, content: string){
    return (this.http.post('api/addVersionAndUnlockFile/' + content, textfile ));
    //bitte noch passenden Call abkären!
  }

  unlockFile(textFile: TextFile){
    return(this.http.post('api/unlockFile', textFile));
  }


}
