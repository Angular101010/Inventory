import { Component, OnInit } from '@angular/core';
import { Inventory } from '../inventory'
import { INVENTORIES } from '../mock-inventory';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
inventories = INVENTORIES;
selectedInventory?: Inventory;
  
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(inventory: Inventory): void {
    this.selectedInventory = inventory;
  }
}
