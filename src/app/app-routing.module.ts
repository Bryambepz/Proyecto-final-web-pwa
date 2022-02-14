import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversionMonedaComponent } from './pages/conversion-moneda/conversion-moneda.component';
import { EstadoCuentaComponent } from './pages/estado-cuenta/estado-cuenta.component';
import { SimuladorAhorrosComponent } from './pages/simulador-ahorros/simulador-ahorros.component';
import { TransferenciasComponent } from './pages/transferencias/transferencias.component';

const routes: Routes = [
  {path: "conversionMoneda", component: ConversionMonedaComponent},
  {path: "estadoCuenta", component: EstadoCuentaComponent},
  {path: "simuladorAhorros", component: SimuladorAhorrosComponent},
  {path: "transferencia", component: TransferenciasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
