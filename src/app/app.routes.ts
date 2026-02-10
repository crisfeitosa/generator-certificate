import { Routes } from '@angular/router';
import { Certificate } from './pages/certificate/certificate';
import { Certificates } from './pages/certificates/certificates';
import { CertificatesForm } from './pages/certificates-form/certificates-form';

export const routes: Routes = [
  {
    path: '',
    component: Certificates
  },
  {
    path: 'certificates/new',
    component: CertificatesForm
  },
  {
    path: 'certificates/:id',
    component: Certificate
  }
];
