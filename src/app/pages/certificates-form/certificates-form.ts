import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-certificates-form',
  imports: [PrimaryButton, SecondaryButton, FormsModule, CommonModule],
  templateUrl: './certificates-form.html',
  styleUrls: ['./certificates-form.css'],
})
export class CertificatesForm {
  name: string = '';
  activity: string = '';
  activities: string[] = [];

  invalidField(control: NgModel) {
    return control.invalid && control.touched;
  }

  validateForm() {
    return this.activities.length > 0 && this.name.length > 0;
  }

  addActivity() {
    this.activities.push(this.activity);
    this.activity = '';
  }

  removeActivity(index: number) {
    this.activities.splice(index, 1);
  }
}
