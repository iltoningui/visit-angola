import { AfterContentInit, Component, Renderer2, ElementRef, Input, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'div[app-hero]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  host: {'class': 'hero'}
})
export class HeroComponent implements OnInit {
  @Input() backgroundUrl!: String;
  @Input() icon?: String;
  @Input() title!: String;
  @Input() summary!: String;
  @Input() textColor?: String = 'white';

  constructor(
    private elRef: ElementRef, 
    private renderer: Renderer2) {}

  updateUrl() {
    const hostElement = this.elRef.nativeElement;
    this.renderer.setStyle(hostElement, 'background-image', `url('${this.backgroundUrl}')`);
    if(this.textColor == 'black') {
      this.renderer.addClass(hostElement, 'black');
    }
    // this.renderer.setStyle(hostElement, 'color', 'white');
    // this.elRef.nativeElement.style.setProperty('background-image', );
  }

  ngOnInit(): void {
    this.updateUrl();
  }
}
