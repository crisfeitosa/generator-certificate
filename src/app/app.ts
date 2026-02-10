import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from "./_components/navbar/navbar";
import { BaseUi } from './_components/base-ui/base-ui';
import { Certificates } from './pages/certificates/certificates';
import { CertificatesForm } from './pages/certificates-form/certificates-form';
import { Certificate } from './pages/certificate/certificate';
import { PrimaryButton } from './_components/primary-button/primary-button';
import { SecondaryButton } from './_components/secondary-button/secondary-button';
import { ItemCertificate } from './_components/item-certificate/item-certificate';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule, PrimaryButton, SecondaryButton, ItemCertificate, BaseUi, Certificates, CertificatesForm, Certificate],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('generator-certificate');
  showNavbar: boolean = true;
}
