import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import data from './data.json';
import { Item } from './list';

@Component({
  selector: 'app-list2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.scss'],
  host: {'class': 'flex-row align-center content-center '}
})
export class List2Component implements OnInit {
  @Input()
  data: Item[] = [];

  ngOnInit(): void {

    if(this.data.length == 0) {
      this.data = data as Item[];
    }

  }
}
