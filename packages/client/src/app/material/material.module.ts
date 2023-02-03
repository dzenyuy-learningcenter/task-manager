import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';

const MaterialModules=[
  MatBadgeModule,
  CommonModule,
  MatButtonModule
]
@NgModule({
  declarations: [],
  imports: MaterialModules,
  exports : MaterialModules,
})
export class MaterialModule { }
