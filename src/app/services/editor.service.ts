import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Editor } from '../model/editor';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://10.42.0.1:8080/api/v1/submit';
   }

   /**
    * submitSolution
    */
   public submitSolution(editor: Editor) {
     return this.http.post<Editor>(this.url, editor);
   }
}
