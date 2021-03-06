import {Component, OnInit} from '@angular/core';
import {Risers} from '../dto/Risers';

@Component({
  selector: 'app-risers',
  templateUrl: './risers.component.html',
  styleUrls: ['./risers.component.css']
})
export class RisersComponent implements OnInit {
  obj1 = {'logo': 'AIDUS', 'token': 'AIDUS Token', 'price': 65594, 'rise': 3793.7};
  array: Risers[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.initialization();
  }

  initialization() {
    for (let i = 0; i < 10; i++) {
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
