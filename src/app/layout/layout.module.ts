import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// COMPONENTS
import { LayoutComponent } from './layout.component';
import { ContentComponent } from './content/content.component';
import { MaterialComponent } from './material/material.component';

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
    ContentComponent,
    LayoutComponent,
    MaterialComponent,
  ],
  exports: [MatAutocompleteModule, MatInputModule],
})
export class LayoutModule { }
