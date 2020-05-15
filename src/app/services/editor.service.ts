import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Editor } from '../model/editor';
import { Observable } from 'rxjs';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  url: string;

  constructor(private http: HttpClient) {
//    this.url = 'http://10.42.0.1:8080/api/v1/submit';
      this.url = 'https://light-compiler-backend.herokuapp.com/api/v1/submit';
   }

   /**
    * submitSolution
    */

   public submitSolution(editor: Editor): Observable<any> {
    return this.http.post<any>(this.url, editor);
   }
}
