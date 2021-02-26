import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortafolioComponent } from './portafolio.component';
import { TitleModule } from '../../widgets/title/title.module';
import { ImageItemModule } from '../../widgets/image-item/image-item.module';

@NgModule({
  declarations: [PortafolioComponent],
  imports: [CommonModule, TitleModule, ImageItemModule],
  exports: [PortafolioComponent],
})
export class PortafolioModule {}
