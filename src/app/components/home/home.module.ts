import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material-flag/material.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule],
  exports: [],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}
