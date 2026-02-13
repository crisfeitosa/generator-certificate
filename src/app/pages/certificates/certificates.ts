import { Component, OnInit } from '@angular/core';
import { ItemCertificate } from "../../_components/item-certificate/item-certificate";
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { CertificateService } from '../../_services/certificate.service';
import { Certificate } from '../../interfaces/certificate';

@Component({
  selector: 'app-certificates',
  imports: [ItemCertificate, SecondaryButton],
  templateUrl: './certificates.html',
  styleUrls: ['./certificates.css'],
})

export class Certificates implements OnInit {
  certificates: Certificate[] = [];

  constructor(private certificateService: CertificateService) {}

  ngOnInit(): void {
    this.certificates = this.certificateService.certificates;
    console.log(this.certificates);
  }
}
