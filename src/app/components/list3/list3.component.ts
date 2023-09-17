import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import data from './data.json';
import { Item } from './list';

@Component({
  selector: 'app-list3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list3.component.html',
  styleUrls: ['./list3.component.scss'],
  host: {'class': 'flex-row align-center content-center wrap gap30'}
})
export class List3Component implements OnInit {
  @Input()
  data: Item[] = [];

  ngOnInit(): void {

    if(this.data.length == 0) {
      this.data = data as Item[];
    }

  }
}
