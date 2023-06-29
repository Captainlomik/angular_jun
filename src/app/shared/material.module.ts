import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
  ],
  imports: [
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatCardModule,
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule, 
    MatIconModule, 
    MatFormFieldModule,
    MatInputModule, 
    MatCardModule,
  ]
})
export class MaterialModule { }
