import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ItemCertificate } from "../../_components/item-certificate/item-certificate";
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';

@Component({
  selector: 'app-certificates',
  imports: [ItemCertificate, RouterLink, SecondaryButton],
  templateUrl: './certificates.html',
  styleUrls: ['./certificates.css'],
})
export class Certificates {

}
