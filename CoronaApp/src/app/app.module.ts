import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoronaClientComponentComponent } from './components/corona-client-component.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
  declarations: [
  CoronaClientComponentComponent
],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [CoronaClientComponentComponent]
})
export class AppModule { }
