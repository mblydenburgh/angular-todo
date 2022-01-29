import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Task } from "../Task"

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return  this.httpClient.get<Task[]>(this.apiUrl);
  }

  // addTask function
  addTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.apiUrl, task, httpOptions);
  }

  // deleteTask function
  deleteTask(task: Task): Observable<Task> {
    const deleteUrl = `${this.apiUrl}/${task.id}`;
    return this.httpClient.delete<Task>(deleteUrl);
  }

  // updateTask function
  updateTask(task: Task): Observable<Task> {
    const updateUrl = `${this.apiUrl}/${task.id}`;
    return this.httpClient.put<Task>(updateUrl, task, httpOptions);
  }
}
