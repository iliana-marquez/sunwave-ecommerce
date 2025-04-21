import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor() { }

  adjustHeight(sectionId: string): void {
    const footer = document.querySelector('footer');
    const navbar = document.querySelector('.navbar')
    const section = document.getElementById(sectionId);

    if (footer && section && navbar) {
      const footerHeight = footer.getBoundingClientRect().height;
      const navbarHeight = navbar?.getBoundingClientRect().height;
      section.style.minHeight = `calc(100vh - (${footerHeight}px + ${navbarHeight}px) )`;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.adjustHeight('contactSection');
    this.adjustHeight('heroSection');
    this.adjustHeight('cartSection');
  }

}
