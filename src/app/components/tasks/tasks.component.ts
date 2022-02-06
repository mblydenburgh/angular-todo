import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { mockTasks } from 'src/app/mock-tasks';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';
import { loadTasks, createTask, deleteTask, updateTask } from 'src/store/task.actions';
import { selectTasks } from 'src/store/task.selectors';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks$ = this.store.select(selectTasks);

  constructor(
    private taskService: TaskService,
     private store: Store<AppState>
     ) { }

  ngOnInit(): void {
    this.store.dispatch(loadTasks())
  }

  addTask(task: Task) {
    this.store.dispatch(createTask({task}))
  }

  deleteTask(task: Task) {
    this.store.dispatch(deleteTask({task}))
  }

  toggleTaskReminder(task: Task) {
    task.reminder = !task.reminder;
    this.store.dispatch(updateTask({task}))
  }

}
