import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IProduct } from "src/app/interfaces/iproduct";

@Component({
    selector: 'confirmation-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.sass']
})
export class ConfirmationDialogComponent {

    selectedProduct: IProduct;

    constructor(
        private ref: MatDialogRef<ConfirmationDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data : IProduct
    ) {
        this.selectedProduct = data;
    }

    close() {
        this.ref.close()
    }


    delete() {
        this.ref.close(this.selectedProduct)
    }
}