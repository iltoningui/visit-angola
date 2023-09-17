import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { List1Component } from 'src/app/components/list1/list1.component';
import { List2Component } from 'src/app/components/list2/list2.component';
import { List3Component } from 'src/app/components/list3/list3.component';
import { List4Component } from 'src/app/components/list4/list4.component';
import { Item } from 'src/app/components/list4/list';
import data from './../../data/culture.json';
import { HeroComponent } from 'src/app/components/hero/hero.component';

@Component({
  selector: 'app-culture',
  standalone: true,
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.scss'],
  host: { 'class': 'flex-col align-center content-start gap30 pt50' },
  imports: [CommonModule, HeroComponent, List1Component, List2Component, List3Component, List4Component]
})
export class CultureComponent implements OnInit {
  @Input()
  data: Item[] = [];

  ngOnInit(): void {

    if(this.data.length == 0) {
      this.data = data as Item[];
    }

  }
}