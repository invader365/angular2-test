import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound.component/notfound.component';
import { LayoutComponent } from './layout/layout.component';
import { JsonServerComponent } from './layout/content/json-server/json-server.component';
import { MainComponent } from './main.component/main.component';
import { MaterialComponent } from './layout/content/material/material.component';

export const ROUTER_LINKS: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'layout', component: LayoutComponent,
    children: [
      { path: 'json-server', component: JsonServerComponent, outlet: 'second' },  // , canActivate: [AuthGuard]
      { path: 'material', component: MaterialComponent, outlet: 'second' },
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

export const ROUTES: ModuleWithProviders = RouterModule.forRoot(ROUTER_LINKS);
