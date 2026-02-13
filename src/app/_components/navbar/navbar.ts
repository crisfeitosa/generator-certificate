import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, RouterModule, CommonModule  ],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})

export class Navbar {}
