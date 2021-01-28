import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-message-bar',
  templateUrl: './message-bar.component.html',
  styleUrls: ['./message-bar.component.css']
})
export class MessageBarComponent implements OnInit {
  messages: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.messagesHandler();
  }

  messagesHandler() {
    for (let i = 0; i <= 5; i++) {
      let str: string = 'Add your message here  ' + (i + 1);
      this.messages.push(str)
    }
  }
}
