import { AfterViewInit, Component } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {

  constructor (private layoutService: LayoutService) {}

  ngAfterViewInit(): void {
    this.layoutService.adjustHeight('contact');
    this.layoutService.observeNavbarChanges('contact');
  }
}
