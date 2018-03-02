import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// APP COMPONENTS
import { LayoutComponent } from './layout.component';
import { MaterialComponent } from './content/material/material.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatAutocompleteModule,
    MatInputModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    LayoutComponent,
    MaterialComponent,
    MenuComponent,
  ],
  exports: [MatAutocompleteModule, MatInputModule],
})
export class LayoutModule { }
