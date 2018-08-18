import {
  Component, OnInit, Input, OnChanges, Output,
  EventEmitter, ChangeDetectionStrategy
} from '@angular/core';
import {ToDo} from '../../models';

@Component({
  selector: 'app-todo-list',
  template: `
    <mat-list role="list">
      <mat-list-item *ngFor="let todo of todos" role="listitem" (click)="select.emit(todo.id)">
        <div class="todo-item">{{todo.description}}</div>
        <!--<app-film-item  [film]="film"></app-film-item>-->
      </mat-list-item>
    </mat-list>
  `,
  styles: [`
    mat-list-item:hover {
      /*background-color: #ccc;*/
    }

    .todo-item {
      margin-top: 5px;
      padding: 16px;
      width: 400px;
      text-align: center;
      box-shadow: 0px 0px 16px -4px rgba(0, 0, 0, 0.15);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit, OnChanges {
  @Input() todos: ToDo[];
  @Input() label: string;
  @Output() select = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
  }

}
