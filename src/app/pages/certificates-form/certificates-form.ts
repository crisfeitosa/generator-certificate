import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CertificateService } from '../../_services/certificate.service';
import { Certificate } from '../../interfaces/certificate';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-certificates-form',
  imports: [PrimaryButton, SecondaryButton, FormsModule, CommonModule],
  templateUrl: './certificates-form.html',
  styleUrls: ['./certificates-form.css'],
})
export class CertificatesForm {
  constructor(private certificateService: CertificateService) {}
  @ViewChild('form') form!: NgForm;

  certificate: Certificate = {
    id: '',
    name: '',
    activities: [],
    issueDate: '',
  };

  activity: string = '';

  invalidField(control: NgModel) {
    return control.invalid && control.touched;
  }

  validateForm() {
    return this.certificate.activities.length > 0 && this.certificate.name.length > 0;
  }

  addActivity() {
    if (this.activity.length == 0) {
      return;
    }

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

    this.certificate.issueDate = this.dateNow();
    this.certificate.id = uuidv4();
    this.certificateService.addCertificate(this.certificate);

    this.certificate = this.initialStatusCertificate();
    this.form.reset();
  }

  dateNow() {
    const dateNow = new Date();
    const day = String(dateNow.getDate()).padStart(2, '0');
    const month = String(dateNow.getMonth() + 1).padStart(2, '0');
    const year = dateNow.getFullYear();

    const dateFormatted = `${day}/${month}/${year}`;

    return dateFormatted;
  }

  initialStatusCertificate(): Certificate {
    return {
      id: '',
      name: '',
      activities: [],
      issueDate: '',
    };
  }
}
