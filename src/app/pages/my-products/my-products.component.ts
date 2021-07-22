import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatTableDataSource } from "@angular/material/table";
import { ConfirmationDialogComponent } from "src/app/components/dialog/dialog.component";
import { IProduct } from "src/app/interfaces/iproduct";
import { ProductService } from "src/app/rest/product.service";

@Component({
    selector: 'my-products',
    templateUrl: './my-products.component.html',
    styleUrls: ['./my-products.component.sass']
})
export class MyProductsComponent implements OnInit, AfterViewInit {

    displayedColumns : string[] = ['code', 'name', 'description', 'action']; 

    tableDataSource = new MatTableDataSource<IProduct>([]);
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor(
        private productService : ProductService,
        private dialog: MatDialog,
        private snackbar: MatSnackBar
    ) {
        this.loadDataSource()
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.tableDataSource.paginator = this.paginator;
        this.paginator._intl.firstPageLabel = "Primera página";
        this.paginator._intl.itemsPerPageLabel = "Registros por página";
        this.paginator._intl.lastPageLabel = "Última página";
        this.paginator._intl.nextPageLabel = "Siguiente página";
        this.paginator._intl.previousPageLabel = "Anterior página";
    }

    loadDataSource() {
        this.productService.getProducts().subscribe({
            next : (response : IProduct[]) => {
                this.tableDataSource.data = response
            }
        });
    }

    openDialog(product : IProduct) {
        const config = new MatDialogConfig();
        config.data = {
            id: product.id,
            name: product.name
        };
        config.width = '450px'
        config.height = '180px'
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, config);

        dialogRef.afterClosed().subscribe(
            (data:IProduct) => {
                if(data != null) {
                    this.productService.delete(data.id).subscribe({
                        next: (response) => {
                            this.loadDataSource()
                            this.openSnackBar("Se ha eliminado el registro con éxito", "Close")
                        }
                    })
                }
            }
        );      
    }

    openSnackBar(message: string, action: string) {
        this.snackbar.open(message, action, {
            duration: 10000,
            panelClass: ['snackbar']
        });
    }

}