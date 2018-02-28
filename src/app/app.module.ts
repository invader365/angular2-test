import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// MODULES
import { LayoutModule } from './layout/layout.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { MainComponent } from './main.component/main.component';
import { NotfoundComponent } from './notfound.component/notfound.component';

// DIRECTIVES
import { AppToggleDirective } from './toggle.directive/toggle.directive';

// ROUTES
import { RouterModule } from '@angular/router';
import { MODULE_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AppToggleDirective,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    HttpModule,
    RouterModule.forRoot(MODULE_ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
