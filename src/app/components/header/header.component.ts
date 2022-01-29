import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Angular Todo';
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe((showAddTask) => {
      this.showAddTask = showAddTask;
    })
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleAddTaskComponent()
  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }

}
