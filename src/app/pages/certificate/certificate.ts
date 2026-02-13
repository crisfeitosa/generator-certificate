import html2canvas from 'html2canvas';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('certificateContainer') certificateElement!: ElementRef;

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
    })
  }

  downloadCertificate() {
    if (this.certificate == undefined) {
      return;
    }

    html2canvas(this.certificateElement.nativeElement, { scale: 2 }).then(
      (canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download =
          'certificate_' + this.certificate?.name.replaceAll(' ', '_') + '.png';
        link.click();
      }
    );
  }
}
