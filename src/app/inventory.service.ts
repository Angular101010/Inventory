import { Injectable } from '@angular/core';
import { Inventory } from './inventory';
import { INVENTORIES } from './mock-inventory';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {

  constructor() { }

  getInventories(): Inventory[] {
    return INVENTORIES;
  }
}
