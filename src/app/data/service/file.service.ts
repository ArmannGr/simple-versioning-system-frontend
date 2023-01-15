import { Injectable } from '@angular/core';
import {TextFile} from "../types/TextFile";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  addFile(textFile: TextFile){
    return(this.http.post('api/addFile', textFile));
  }
}
