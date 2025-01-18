import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @ViewChild('navBar') nav!: ElementRef;
  @HostListener('window:scroll') ChangeNavPadding() {
    if (window.scrollY) {
      this.nav.nativeElement.classList.add('py-2');
      this.nav.nativeElement.classList.remove('py-4');
    } else {
      this.nav.nativeElement.classList.add('py-4');
      this.nav.nativeElement.classList.remove('py-2');
    }
  }
}
