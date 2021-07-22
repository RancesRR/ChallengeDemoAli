import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { MatDialogModule } from '@angular/material/dialog'
import { ConfirmationDialogComponent } from "./dialog.component"

@NgModule({
    declarations: [ConfirmationDialogComponent],
    imports: [
        CommonModule,
        MatDialogModule
    ]
})
export class ConfirmationDialogModule {}