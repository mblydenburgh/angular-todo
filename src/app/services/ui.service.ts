import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTaskComponent: boolean = false;
  private subject = new Subject<any>();
  constructor() { }

  toggleAddTaskComponent(): void {
    this.showAddTaskComponent = !this.showAddTaskComponent;
    this.subject.next(this.showAddTaskComponent);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

}
