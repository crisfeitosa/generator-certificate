import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { FormsModule, NgModel } from '@angular/forms';
import { Certificate } from '../../interfaces/certificate';

@Component({
  selector: 'app-certificates-form',
  imports: [PrimaryButton, SecondaryButton, FormsModule, CommonModule],
  templateUrl: './certificates-form.html',
  styleUrls: ['./certificates-form.css'],
})
export class CertificatesForm {
  certificate: Certificate = {
    name: '',
    activities: [],
  };

  activity: string = '';

  invalidField(control: NgModel) {
    return control.invalid && control.touched;
  }

  validateForm() {
    return this.certificate.activities.length > 0 && this.certificate.name.length > 0;
  }

  addActivity() {
    this.certificate.activities.push(this.activity);
    this.activity = '';
  }

  removeActivity(index: number) {
    this.certificate.activities.splice(index, 1);
  }

  submit() {
    if(!this.validateForm()) {
      return;
    }

    console.log(this.certificate);
  }
}
