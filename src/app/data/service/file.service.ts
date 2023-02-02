import { Injectable } from '@angular/core';
import {TextFile} from "../types/TextFile";
import {HttpClient, HttpParams} from "@angular/common/http";
import * as url from "url";
import * as stream from "stream";

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

    const options = {params: new HttpParams().set('versionContent', content)};


    return (this.http.post('api/addVersionAndUnlockFile' , textfile, options ));

  }

  unlockFile(textFile: TextFile){
    return(this.http.post('api/unlockFile', textFile));
  }


}
