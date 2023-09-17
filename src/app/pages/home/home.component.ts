import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { List1Component } from "../../components/list1/list1.component";
import { List2Component } from 'src/app/components/list2/list2.component';
import { List3Component } from "../../components/list3/list3.component";
import { List4Component } from 'src/app/components/list4/list4.component';

@Component({
    selector: 'section[app-home]',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    host: { 'class': 'flex-col align-center content-start gap30 pt50' },
    imports: [CommonModule, List1Component, List2Component, List3Component, List4Component]
})
export class HomeComponent {

}
