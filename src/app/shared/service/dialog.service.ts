import { Injectable } from '@angular/core';

import Swal from 'sweetalert2'
import { CaseService } from 'src/app/pages/case/case.service';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  employeeParam = "";

  constructor(
    private caseService: CaseService
  ) { }



  // openTransactionDetails(transaction:ITransaction, customer:ICustomer) {
  //   const dialogRef = this.dialog.open(TransactionDetailsComponent , {
  //     width: '250px',
  //     // data: { name: this.name, animal: this.animal }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }

  caseDeleteDialog(_id: string) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger bg-danger',
        cancelButton: 'btn btn-secondary'
      },
      buttonsStyling: true
    })

    swalWithBootstrapButtons.fire({
      title: 'Delete' + ' ' + name + '?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      console.log(result);
      if (result.value) {
        this.caseService.deleteCase(_id)
          .subscribe(() => {
            this.caseService.getCases();
            this.success()
          });
      }
    })
  };


  // branchDeleteDialog(_id: string, name: string) {
  //   const swalWithBootstrapButtons = Swal.mixin({
  //     customClass: {
  //       confirmButton: 'btn btn-danger bg-danger',
  //       cancelButton: 'btn btn-secondary'
  //     },
  //     buttonsStyling: true
  //   })

  //   swalWithBootstrapButtons.fire({
  //     title: 'Delete' + ' ' + name + '?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes, delete it!',
  //     cancelButtonText: 'No, cancel!',
  //     reverseButtons: true
  //   }).then((result) => {
  //     if (result.value) {
  //       this.branchService.deleteBranch(_id)
  //         .subscribe(() => {
  //           this.branchService.getBranches(18, 1)
  //           this.success()
  //         });
  //     }
  //   })
  // }


  // // ++++++++++++++++++++++
  // engineerApproval(id: string, name: string) {
  //   const swalWithBootstrapButtons = Swal.mixin({
  //     customClass: {
  //       confirmButton: 'btn btn-success bg-green',
  //       cancelButton: 'btn btn-danger bg-danger'
  //     },
  //     buttonsStyling: true
  //   })

  //   swalWithBootstrapButtons.fire({
  //     title: 'Approve' + ' ' + name + '?',
  //     text: "Be sure to check if he is truely an engineer!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes, approve!',
  //     cancelButtonText: 'No, cancel!',
  //     reverseButtons: true
  //   }).then((result) => {
  //     if (result.value) {
  //       this.notificationsListService.approveEngineer(id)
  //         .subscribe(() => {
  //           this.notificationsListService.getNotifications();
  //           this.success();
  //         });
  //     }
  //   })
  // }


  success() {
    const toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 5000,
      grow: 'column'
    })

    toast.fire({
      icon: 'success',
      title: "Success!!!"
    })

  }

}