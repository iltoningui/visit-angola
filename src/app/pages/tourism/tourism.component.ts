import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { List2Component } from "../../components/list2/list2.component";
import { List1Component } from "../../components/list1/list1.component";
import { List3Component } from "../../components/list3/list3.component";
import { HeroComponent } from 'src/app/components/hero/hero.component';

@Component({
    selector: 'app-tourism',
    standalone: true,
    templateUrl: './tourism.component.html',
    styleUrls: ['./tourism.component.scss'],
    host: {'class': 'flex-col align-center content-start gap30 pt50'},
    imports: [CommonModule, HeroComponent, List2Component, List1Component, List3Component]
})
export class TourismComponent {

}
