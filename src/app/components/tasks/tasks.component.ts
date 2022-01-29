import { Component, OnInit } from '@angular/core';
import { mockTasks } from 'src/app/mock-tasks';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks
    });
  }

  addTask(task: Task) {
    this.taskService.addTask(task)
      .subscribe((newTask) => {
        this.tasks.push(newTask);
      });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task)
      .subscribe(() => (this.tasks = this.tasks.filter(t => t.id !== task.id)))
  }

  toggleTaskReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTask(task)
      .subscribe(() => { console.log('task updated'); })
  }

}
