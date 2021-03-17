import { Injectable } from '@angular/core';
import { Inventory } from './inventory';
import { INVENTORIES } from './mock-inventory';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {

  constructor() { }

  getInventories(): Observable<Inventory[]> {
    return of(INVENTORIES);
  }
}
