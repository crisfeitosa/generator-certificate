import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from "./_components/navbar/navbar";
import { BaseUi } from './_components/base-ui/base-ui';
import { CertificateService } from './_services/certificate.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule, BaseUi,],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App implements OnInit {
  protected readonly title = signal('generator-certificate');
  showNavbar: boolean = true;

  constructor(private certificateService: CertificateService) {}

  ngOnInit(): void {
    const certificates = localStorage.getItem('certificates');
    this.certificateService.certificates = certificates ? JSON.parse(certificates) : [];
  }
}
