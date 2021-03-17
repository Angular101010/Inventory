import { Component, OnInit } from '@angular/core';
import { Inventory } from '../inventory';
// import { INVENTORIES } from './../mock-inventory';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  inventories: Inventory[] = [];
selectedInventory?: Inventory;
  
  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.getInventories();
  }

  getInventories() {
    this.inventoryService.getInventories()
    .subscribe(inventories => (this.inventories = inventories)
    );
  }
  onSelect(inventory: Inventory): void {
    this.selectedInventory = inventory;
  }
}
