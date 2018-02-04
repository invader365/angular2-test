import {Route} from '@angular/router';

// AUTHENTICATION
// import {AuthGuard} from './autenticacion/servicios/auth-guard.service';

// COMPONENTS
import {NotfoundComponent} from './notfound.component/notfound.component';
import {MainComponent} from './main.component/main.component';
// import {LayoutComponent} from './layout/layout.component';

export const MODULE_ROUTES: Route[] = [
  {path: 'home', component: MainComponent},
  {path: 'content', component: MainComponent,
    children: [
      // {path: 'home', component: BienvenidoComponent, outlet: 'second'},
      // {path: 'proveedores/:idProveedor/sede/create', component: FormSedesComponent, outlet: 'second' , canActivate: [AuthGuard]},
    ]
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent}
];

