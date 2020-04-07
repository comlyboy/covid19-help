import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }


  success(message) {
    const toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 5000,
      grow: 'column'
    })

    toast.fire({
      icon: 'success',
      title: message
    })
  }
  smallSuccess(message) {
    const toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 5000,
      grow: 'column'
    })

    toast.fire({
      icon: 'success',
      title: message
    })
  }

  error(message) {
    Swal.fire({
      icon: 'error',
      title: message,
      text: "",
      timer: 7000

    })

  }

  notInfected(message) {
    Swal.fire({
      icon: 'info',
      title: message,
      text: "Your symptoms aren't enough evidence, you come back when the symptoms seem to be increasing",
      timer: 7000

    })

  }

  infected(message) {
    Swal.fire({
      icon: 'info',
      title: message,
      text: "Redirecting you to register page",
      timer: 7000

    })
  }
}
