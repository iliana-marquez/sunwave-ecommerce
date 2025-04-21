import { AfterViewInit, Component, HostListener } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit {

  constructor (private layoutService: LayoutService) {}

  ngAfterViewInit(): void {
    this.layoutService.adjustHeight('hero');
  }
}
