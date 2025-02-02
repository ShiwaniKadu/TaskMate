import { Component, Input, Output, EventEmitter, output} from '@angular/core';
// import { DUMMY_USERS } from '../dummy.user';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User={
//   id: string;
//   name: string;
//   avatar: string;
// }

import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = signal( DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // get imagePath(){
  //   return 'assets/user/' + this.selectedUser.avatar;
  // }
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter();

  // select = output<string>()

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // }); 

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser(){
    this.select.emit(this.user.id);
  }

}
