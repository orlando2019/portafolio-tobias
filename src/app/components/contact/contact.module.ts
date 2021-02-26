import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { TitleModule } from '../../widgets/title/title.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, TitleModule, ReactiveFormsModule],
  exports: [ContactComponent],
})
export class ContactModule {}
