import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Input() label: string;
  @Output() add = new EventEmitter();

  todo: string;

  constructor() { }

  ngOnInit() {}

  addTodo() {
    this.add.emit(this.todo);
    this.todo = '';
  }

}
