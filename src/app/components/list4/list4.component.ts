import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import data from './data.json';
import { Item } from './list';

@Component({
  selector: 'section[app-list4]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list4.component.html',
  styleUrls: ['./list4.component.scss'],
  host: {'class': 'flex-row align-center content-center wrap gap20'}
})
export class List4Component implements OnInit {
  @Input()
  data: Item[] = [];

  ngOnInit(): void {

    if(this.data.length == 0) {
      this.data = data as Item[];
    }

  }
}
