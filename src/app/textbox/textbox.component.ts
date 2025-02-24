import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-textbox',
  imports: [FormsModule],
  templateUrl: './textbox.component.html',
  styleUrl: './textbox.component.css',
})
export class TextboxComponent {
  @Input() placeholder: string = '';
  @Output() placeholderChange = new EventEmitter<string>();

  onPlaceholderChange(e: any) {
    console.log(e);
    this.placeholderChange.emit(e);
  }
}
