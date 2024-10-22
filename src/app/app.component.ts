import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from  './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy.user';
import { TasksComponent } from './tasks/tasks.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId? : string;

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId);

  }
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
