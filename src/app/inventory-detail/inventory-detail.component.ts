import { Component, OnInit, Input } from '@angular/core';
import { Inventory } from '../inventory';


@Component({
  selector: 'app-inventory-detail',
  templateUrl: './inventory-detail.component.html',
  styleUrls: ['./inventory-detail.component.css']
})
export class InventoryDetailComponent implements OnInit {

  @Input() inventory?: Inventory;

  constructor() { }

  ngOnInit(): void {
  }

}
