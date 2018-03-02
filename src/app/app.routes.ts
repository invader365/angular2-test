import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS
import { NotfoundComponent } from './notfound.component/notfound.component';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main.component/main.component';
import { MaterialComponent } from './layout/content/material/material.component';

export const ROUTER_LINKS: Routes = [
  // { path: 'login', component: MainComponent },
  { path: 'layout', component: LayoutComponent,
    children: [
      { path: 'material', component: MaterialComponent, outlet: 'second' },  // , canActivate: [AuthGuard]
    ]
  },
  { path: '', redirectTo: 'layout', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

export const ROUTES: ModuleWithProviders = RouterModule.forRoot(ROUTER_LINKS);
