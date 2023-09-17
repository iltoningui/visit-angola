import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CultureComponent } from './culture/culture.component';
import { FoodComponent } from './food/food.component';
import { MusicComponent } from './music/music.component';
import { StarsComponent } from './stars/stars.component';
import { TourismComponent } from './tourism/tourism.component';
import { ArtComponent } from './art/art.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'culture', component: CultureComponent},
    { path: 'food', component: FoodComponent},
    { path: 'art', component: ArtComponent},
    { path: 'tourism', component: TourismComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
