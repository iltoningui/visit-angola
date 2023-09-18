import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcrylicLayoutComponent } from './layout/acrylic-layout/acrylic-layout.component';

const routes: Routes = [
  { path: '', component: AcrylicLayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
