import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PresupuestoService {
  presupuesto: number;
  restante: number;
  // los observables llevan un $ al final
  private gastos$ = new Subject<any>();

  constructor() {
    this.presupuesto = 0;
    this.restante = 0;
  }

  agregarGasto(gasto: any): void {
    this.restante = this.restante - gasto.cantidad;
    this.gastos$.next(gasto);
  }

  getGastos(): Observable<any> {
    return this.gastos$.asObservable();
  }
}
