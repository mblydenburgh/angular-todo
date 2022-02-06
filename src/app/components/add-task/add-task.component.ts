import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from 'src/app/services/ui.service';
import {Subscription} from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask = new EventEmitter<Task>();

  text: string = "";
  day: string = "";
  reminder: boolean = false;
  subscription: Subscription = new Subscription;
  showAddTask: boolean = false;


  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((showAddTask) => {
      this.showAddTask = showAddTask;
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text || !this.day) {
      alert('Please enter text and day');
      return;
    }
    const newTask: Task = { id: uuidv4(), text: this.text, day: this.day, reminder: this.reminder };
    this.onAddTask.emit(newTask);

    this.text = "";
    this.day = "";
    this.reminder = false;
  }
}
