import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CertificateService } from '../../_services/certificate.service';
import { Certificate as ICertificate } from '../../interfaces/certificate';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';

@Component({
  selector: 'app-certificate',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificate.html',
  styleUrls: ['./certificate.css'],
})

export class Certificate implements OnInit {
  id: string | null = null;
  certificate: ICertificate | undefined;

  constructor(
    private CertificateService: CertificateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.certificate = this.CertificateService.certificates.find(
        (item) => item.id == this.id
      );
      console.log(this.certificate);
    })
  }
}
