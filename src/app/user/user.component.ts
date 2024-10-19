import { Component, Input, Output, EventEmitter, output} from '@angular/core';
// import { DUMMY_USERS } from '../dummy.user';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = signal( DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // get imagePath(){
  //   return 'assets/user/' + this.selectedUser.avatar;
  // }
  @Input({ required: true }) id!: string; 
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();

  // select = output<string>()

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // }); 

  get imagePath(){
    return 'assets/users/' + this.avatar;
  }
  onSelectUser(){
    this.select.emit(this.id);
  }

}
