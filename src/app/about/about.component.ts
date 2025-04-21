import { AfterViewInit, Component } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {

  constructor (private layoutService: LayoutService) {}

  ngAfterViewInit(): void {
    this.layoutService.adjustHeight('about');
  }
  

}
