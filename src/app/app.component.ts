import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ToDo } from './models';
import { Store } from '@ngrx/store';
import * as fromRoot from './store/reducers';
import * as todoAction from './store/actions/todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos$: Observable<ToDo[]>;
  selected$: Observable<ToDo>;

  constructor(private store: Store<fromRoot.State>) {
    this.todos$ = store.select(fromRoot.getAllTodos);
    this.selected$ = store.select(fromRoot.getSelectedTodo);
  }

  onAdd(todoText: string) {
    this.store.dispatch(new todoAction.AddOne(todoText));
    console.log('todo', todoText);
  }

  onSelect(id: number) {
    this.store.dispatch(new todoAction.Select(id));
  }
}
