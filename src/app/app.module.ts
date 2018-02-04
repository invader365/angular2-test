import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// APP COMPONENTS
import { MainComponent } from './main.component/main.component';
import { AppToggleDirective } from './toggle.directive/toggle.directive';
import { MaterialComponent } from './material.component/material.component';
import { NotfoundComponent } from './notfound.component/notfound.component';

@NgModule({
  declarations: [
    MainComponent,
    AppToggleDirective,
    MaterialComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    NoopAnimationsModule,
    HttpModule
  ],
  exports: [MatAutocompleteModule, MatInputModule],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule {}
