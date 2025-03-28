import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css','menu-bar.mobile.component.css','menu-bar.ultra.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Variável que controla o estado do menu (aberto/fechado)
  isMenuOpen = false;

  // Método para alternar o estado do menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
}
