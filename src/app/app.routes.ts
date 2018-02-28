import { Route } from '@angular/router';

// App Components
import { NotfoundComponent } from './notfound.component/notfound.component';
import { MainComponent } from './main.component/main.component';
import { ContentComponent } from './layout/content/content.component';
import { LayoutComponent } from './layout/layout.component';

export const MODULE_ROUTES: Route[] = [
  { path: 'home', component: MainComponent },
  { path: 'layout', component: LayoutComponent,
    children: [
      { path: 'content', component: ContentComponent, outlet: 'second' },
      // { path: 'content/:idProveedor', component: FormSedesComponent, outlet: 'second' , canActivate: [AuthGuard]},
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];
