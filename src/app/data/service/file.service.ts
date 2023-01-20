import { Injectable } from '@angular/core';
import {TextFile} from "../types/TextFile";
import {HttpClient} from "@angular/common/http";

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
}
