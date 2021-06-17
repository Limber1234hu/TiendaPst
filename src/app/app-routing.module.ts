import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BebidasComponent } from './bebidas/bebidas.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CompraComponent } from './compra/compra.component';
import { EnsaladasComponent } from './ensaladas/ensaladas.component';
import { FormpagoComponent } from './formpago/formpago.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { PostresComponent } from './postres/postres.component';
import { RegistroComponent } from './registro/registro.component';
import { RosqTosComponent } from './rosq-tos/rosq-tos.component';
import { SopasComponent } from './sopas/sopas.component';
import { TerminosComponent } from './terminos/terminos.component';
import { TostadaComponent } from './tostada/tostada.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: 'menu', component:MenuComponent },
  { path: 'terminos', component:TerminosComponent },
  { path: 'compra', component: CompraComponent },
  { path: 'tostadas', component:TostadaComponent },
  { path: 'bebidas', component:BebidasComponent },
  { path: 'ensaladas', component:EnsaladasComponent },
  { path: 'postres', component:PostresComponent },
  { path: 'rosquillas', component:RosqTosComponent},
  { path: 'sopas', component:SopasComponent },
  { path: 'formpago', component:FormpagoComponent },
  { path: 'registros', component:RegistroComponent },
  { path: 'carrrito', component:CarritoComponent },
  { path: 'inicio', component:InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
