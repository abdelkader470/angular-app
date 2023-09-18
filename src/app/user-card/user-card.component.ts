import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent {
  @Input() userItem!: any;
  @Output() sandUserName = new EventEmitter();
  sendName(userName: string) {
    this.sandUserName.emit(userName);
  }
}
