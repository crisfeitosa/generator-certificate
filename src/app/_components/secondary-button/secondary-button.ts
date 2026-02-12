import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  imports: [CommonModule],
  templateUrl: './secondary-button.html',
  styleUrls: ['./secondary-button.css'],
})
export class SecondaryButton {
  @Input() textBtn: string = '';
  @Input() phClass: string = '';
  @Input() disabled: boolean = false;
}
