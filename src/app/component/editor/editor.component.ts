import { Component, OnInit } from '@angular/core';
import { Editor } from '../../model/editor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  editor: Editor = new Editor();

  constructor() { }

  ngOnInit() {
  }

  public onSubmit() {
    console.log(this.editor);
  }

  changedLanguage(event: any) {
    this.editor.language = event.target.value;
  }

}
