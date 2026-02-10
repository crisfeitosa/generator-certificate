import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SecondaryButton } from '../secondary-button/secondary-button';

@Component({
  selector: 'app-item-certificate',
  imports: [SecondaryButton],
  templateUrl: './item-certificate.html',
  styleUrl: './item-certificate.css',
})
export class ItemCertificate {
  id = '1234';

  constructor(private router: Router) {}

  redirectCertificate() {
    this.router.navigate(['/certificates', this.id]);
  }
}
