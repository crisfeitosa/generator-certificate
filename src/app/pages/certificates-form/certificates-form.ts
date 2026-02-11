import { Component } from '@angular/core';
import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-certificates-form',
  imports: [PrimaryButton, SecondaryButton, FormsModule],
  templateUrl: './certificates-form.html',
  styleUrls: ['./certificates-form.css'],
})
export class CertificatesForm {
  name: string = '';
  activity: string = '';
  activities: string[] = ['Angular', 'React', 'Vue'];
}
