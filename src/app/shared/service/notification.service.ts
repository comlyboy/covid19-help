import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private snackBar: MatSnackBar
  ) { }


  success(message: string) {
    const toast = Swal.mixin({
      toast: true,
      position: 'bottom',
      showConfirmButton: false,
      timer: 5000,
      grow: 'column'
    });

    toast.fire({
      icon: 'success',
      title: message
    });
  }
  smallSuccess(message: string) {
    const toast = Swal.mixin({
      toast: true,
      position: 'bottom',
      showConfirmButton: false,
      timer: 5000,
      grow: 'column'
    });

    toast.fire({
      icon: 'success',
      title: message
    });
  }

  exist() {
    const toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 10000,
      grow: 'column'
    });

    toast.fire({
      icon: 'error',
      title: 'phone number already registered'
    });
  }

  error(message: any) {
    Swal.fire({
      icon: 'error',
      title: message,
      text: '',
      timer: 7000

    });

  }

  notInfected(message: string) {
    Swal.fire({
      icon: 'info',
      title: message,
      text: 'Your symptoms aren\'t enough evidence, you come back when the symptoms seem to be increasing',
      timer: 7000

    });

  }

  infected(message: any) {
    Swal.fire({
      icon: 'info',
      title: message,
      text: 'Redirecting you to register page',
      timer: 7000

    });
  }

  successMat(message: string) {
    this.snackBar.open(message, '', {
      duration: 4000,
    });
  }

}
