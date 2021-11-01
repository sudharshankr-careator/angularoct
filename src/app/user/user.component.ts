import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface UserInterface {
  name: string;
  age: number;
  id: number;
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() user: UserInterface;
  @Output() userEvent: EventEmitter<UserInterface>;
  user1 = {
    name: 'mohan',
    age: 22,
    id: 1,
  };
  constructor() {
    this.user = {
      name: 'mohan',
      age: 22,
      id: 1,
    };
    this.userEvent = new EventEmitter();
  }

  ngOnInit(): void {}
  sendUserEvent() {
    this.userEvent.emit(this.user);
  }
}
