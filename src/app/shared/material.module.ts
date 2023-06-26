import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatFormFieldModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule, 
    MatIconModule, 
    MatFormFieldModule
  ]
})
export class MaterialModule { }