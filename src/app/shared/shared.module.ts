import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import InputBaseComponent from './input-base/input-base.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputBaseComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputBaseComponent]
})
export class SharedModule {}
