import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITask } from './store/models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo_app_redux';
  tasks$ = Observable<Array<ITask>>;

  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
