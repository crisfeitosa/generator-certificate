import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CertificateService } from '../../_services/certificate.service';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';

@Component({
  selector: 'app-certificate',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificate.html',
  styleUrls: ['./certificate.css'],
})

export class Certificate implements OnInit {
  constructor(private CertificateService: CertificateService) {}

  ngOnInit(): void {
    console.log(this.CertificateService.certificates);
  }
}
