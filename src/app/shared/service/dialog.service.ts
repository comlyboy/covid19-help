import { Injectable } from '@angular/core';

import Swal from 'sweetalert2';
import { CaseService } from 'src/app/pages/case/case.service';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  employeeParam = '';

  constructor(
    private caseService: CaseService
  ) { }


  caseDeleteDialog(caseId: string) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger bg-danger',
        cancelButton: 'btn btn-secondary'
      },
      buttonsStyling: true
    });

    swalWithBootstrapButtons.fire({
      title: 'Delete' + ' ' + name + '?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.caseService.deleteCase(caseId)
          .subscribe(() => {
            this.caseService.getCases();
            this.success();
          });
      }
    });
  }

  success() {
    const toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 5000,
      grow: 'column'
    });

    toast.fire({
      icon: 'success',
      title: 'Success!!!'
    });

  }

}
