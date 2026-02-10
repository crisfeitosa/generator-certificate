import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from "./_components/navbar/navbar";
import { BaseUi } from './_components/base-ui/base-ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule, BaseUi,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('generator-certificate');
  showNavbar: boolean = true;
}
