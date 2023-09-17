import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import menu from './../../data/menu.json';
import { MenuItem } from 'src/app/models/menu';

@Component({
  selector: 'nav[app-menu]',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {'class': 'flex-row align-center content-center self-center acrylic'}
})
export class MenuComponent {
  menuItems: MenuItem[];
  isCollapsed: boolean = true;
  isMobile: boolean = false;

  constructor() {
    this.menuItems = menu as MenuItem[];
  }
}
