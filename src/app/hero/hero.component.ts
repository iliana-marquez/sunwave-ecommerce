import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.adjustHeroHeight();
  }

  @HostListener ('window:resize', ['$event'])
  onResize(event: Event) {
    this.adjustHeroHeight();
  }

  adjustHeroHeight(): void {
    const footer = document.querySelector('footer');
    const navbar = document.querySelector('.navbar')
    const hero = document.getElementById('hero');

    if (footer && hero && navbar) {
      const footerHeight = footer.getBoundingClientRect().height;
      const navbarHeight = navbar?.getBoundingClientRect().height;
      hero.style.minHeight = `calc(100vh - (${footerHeight}px + ${navbarHeight}px) )`;
    }
  }
}
