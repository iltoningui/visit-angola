import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { AcrylicLayoutComponent } from './acrylic-layout/acrylic-layout.component';
import { MenuComponent } from './menu/menu.component';
import { IconsSpriteComponent } from '../components/icons-sprite/icons-sprite.component';


@NgModule({
  declarations: [
    SideMenuComponent,
    TopMenuComponent,
    AcrylicLayoutComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    IconsSpriteComponent
  ]
})
export class LayoutModule { }
