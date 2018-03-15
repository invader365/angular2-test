import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// APP MODULES
import { LayoutModule } from './layout/layout.module';

// APP COMPONENTS
import { AppComponent } from './app.component';
import { MainComponent } from './main.component/main.component';
import { NotfoundComponent } from './notfound.component/notfound.component';

// APP DIRECTIVES
import { AppToggleDirective } from './toggle.directive/toggle.directive';

// APP ROUTER
import { ROUTER_LINKS } from './app.routes';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AppToggleDirective,
    NotfoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTER_LINKS),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
