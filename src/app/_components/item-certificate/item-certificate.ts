import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SecondaryButton } from '../secondary-button/secondary-button';

@Component({
  selector: 'app-item-certificate',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './item-certificate.html',
  styleUrl: './item-certificate.css',
})
export class ItemCertificate {
  id = '12345';
}
