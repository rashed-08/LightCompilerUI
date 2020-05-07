import { Component, OnInit } from '@angular/core';
import { Editor } from '../../model/editor';
import { EditorService } from '../../services/editor.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  editor: Editor = new Editor();

  constructor(private editorService: EditorService) { }

  ngOnInit() {
  }

  public onSubmit() {
    console.log(this.editor);
    this.editorService.submitSolution(this.editor).subscribe(data => console.log(data), error => console.log(error));
  }

  changedLanguage(event: any) {
    this.editor.language = event.target.value;
  }

}
