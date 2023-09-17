import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from 'src/app/components/hero/hero.component';
import { List1Component } from 'src/app/components/list1/list1.component';
import { List2Component } from 'src/app/components/list2/list2.component';
import { List3Component } from 'src/app/components/list3/list3.component';
import data from './../../data/food.json';
import { Item } from 'src/app/components/list1/list';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [CommonModule, HeroComponent, List2Component, List1Component, List3Component],
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
  host: {'class': 'flex-col align-center content-start gap30 pt50'}
})
export class FoodComponent implements OnInit {
  @Input()
  data: Item[] = [];

  ngOnInit(): void {

    if(this.data.length == 0) {
      this.data = data as Item[];
    }

  }
}