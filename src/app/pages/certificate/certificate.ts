import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';

@Component({
  selector: 'app-certificate',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificate.html',
  styleUrl: './certificate.css',
})
export class Certificate {

}
