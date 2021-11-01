import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isNavMenu = false;
  constructor() { }

  ngOnInit(): void {
  }

  showNavMenu(): void {
    const navMenu = document.getElementById("navigation-menu");
    if (navMenu) {
      if (this.isNavMenu)
        navMenu.style.width = '0px';
      else
        navMenu.style.width = '25%';
      this.isNavMenu = !this.isNavMenu;
    }
  }

  hideNavMenu(): void {
    const navMenu = document.getElementById("navigation-menu");
    if (navMenu) {
        navMenu.style.width = '0px';
    }
  }
}