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

  observeNavbarChanges(sectionId: string) {
    const navbar = document.querySelector('.navbar');
    if (!navbar || !('ResizeObserver' in window)) return;
  
    const observer = new ResizeObserver( ()=>{
     this.adjustHeight(sectionId);
    });
  
    observer.observe(navbar);
  }

}
