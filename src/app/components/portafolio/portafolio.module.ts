import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortafolioComponent } from './portafolio.component';
import { TitleModule } from '../../widgets/title/title.module';

@NgModule({
  declarations: [PortafolioComponent],
  imports: [CommonModule, TitleModule],
  exports: [PortafolioComponent],
})
export class PortafolioModule {}
