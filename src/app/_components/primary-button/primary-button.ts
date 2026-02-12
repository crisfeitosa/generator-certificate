import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [CommonModule],
  templateUrl: './primary-button.html',
  styleUrls: ['./primary-button.css'],
})
export class PrimaryButton {
  @Input() textBtn: string = '';
  @Input() disabled: boolean = false;
}
