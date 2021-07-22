import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { MyProductsComponent } from "./my-products.component"
import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon'
import { ConfirmationDialogModule } from "src/app/components/dialog/dialog.module"
import { MatPaginatorModule } from "@angular/material/paginator"
import { MatSnackBarModule } from "@angular/material/snack-bar"

const routes: Routes = [
    {path: '', component: MyProductsComponent}
]

@NgModule({
    declarations: [MyProductsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatIconModule,
        MatTableModule,
        ConfirmationDialogModule,
        MatPaginatorModule,
        MatSnackBarModule
    ]
})
export class MyProductsModule {}