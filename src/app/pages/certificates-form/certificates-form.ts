import { Component } from '@angular/core';
import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';

@Component({
  selector: 'app-certificates-form',
  imports: [PrimaryButton, SecondaryButton],
  templateUrl: './certificates-form.html',
  styleUrl: './certificates-form.css',
})
export class CertificatesForm {

}
