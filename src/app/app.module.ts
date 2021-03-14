import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InventoryDetailComponent } from './inventory-detail/inventory-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    InventoryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
