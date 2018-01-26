// ANGULAR MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

// APP COMPONENTS
import { MainComponent } from './main.component/main.component';
import { AppToggleDirective } from './toggle.directive/toggle.directive';


@NgModule({
  declarations: [
    MainComponent,
    AppToggleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule {}
