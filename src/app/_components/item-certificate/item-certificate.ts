import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { SecondaryButton } from '../secondary-button/secondary-button';

@Component({
  selector: 'app-item-certificate',
  imports: [SecondaryButton],
  templateUrl: './item-certificate.html',
  styleUrls: ['./item-certificate.css'],
})

export class ItemCertificate {
  @Input() studentName: string = '';
  @Input() issueDate: string = '';
  @Input() id: string = '';

  constructor(private router: Router) {}

  redirectCertificate() {
    this.router.navigate(['/certificates', this.id]);
  }
}
