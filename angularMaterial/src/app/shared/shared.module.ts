  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormFieldValidationErrorsPipe } from './pipes/form-field-validation-errors.pipe';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { RepetirDirective } from './directives/repetir.directive';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';



  @NgModule({
    declarations: [FormFieldValidationErrorsPipe, ResaltadoDirective, RepetirDirective],
    imports: [
      CommonModule,
    ],
    exports: [
      MatTableModule,
      MatButtonModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      ReactiveFormsModule,
      MatIconModule,
      FormFieldValidationErrorsPipe,
      ResaltadoDirective,
      RepetirDirective,
    ],
  })
  export class SharedModule { }
