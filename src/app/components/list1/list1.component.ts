import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import data from './data.json';
import { Item } from './list';

@Component({
  selector: 'app-list1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.scss'],
  host: {'class': 'flex-row align-center content-center '}
})
export class List1Component implements OnInit {
  @Input()
  data: Item[] = [];

  ngOnInit(): void {

    if(this.data.length == 0) {
      this.data = data as Item[];
    }

  }
}
