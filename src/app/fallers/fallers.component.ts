import { Component, OnInit } from '@angular/core';
import {Risers} from '../dto/Risers';

@Component({
  selector: 'app-fallers',
  templateUrl: './fallers.component.html',
  styleUrls: ['./fallers.component.css']
})
export class FallersComponent  implements OnInit {
  obj1 = {'logo': 'AIDUS', 'token': 'AIDUS Token', 'price': 65594, 'rise': 3793.7};
  array: Risers[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.initialization();
  }

  initialization() {
    for (let i = 0; i < 6; i++) {
      let obj = new Risers();
      obj.id = i;
      obj.logo = 'AIDUS';
      obj.token = 'AIDUS Token';
      obj.price = 65594;
      obj.rise = 3793.7;
      this.array.push(obj);
    }
  }
}
