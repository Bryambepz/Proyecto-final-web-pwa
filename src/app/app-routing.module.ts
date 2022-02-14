import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversionMonedaComponent } from './pages/conversion-moneda/conversion-moneda.component';
import { EstadoCuentaComponent } from './pages/estado-cuenta/estado-cuenta.component';
import { SimuladorAhorrosComponent } from './pages/simulador-ahorros/simulador-ahorros.component';

const routes: Routes = [
  {path: "conversionMoneda", component: ConversionMonedaComponent},
  {path: "estadoCuenta", component: EstadoCuentaComponent},
  {path: "simuladorAhorros", component: SimuladorAhorrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
