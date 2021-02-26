import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
/* Mis Modulos */
import { NavbarModule } from './components/navbar/navbar.module';
import { HeaderModule } from './components/header/header.module';
import { AboutModule } from './components/about/about.module';
import { ContactModule } from './components/contact/contact.module';
import { CopyrightModule } from './components/copyright/copyright.module';
import { FooterModule } from './components/footer/footer.module';
import { PortafolioModule } from './components/portafolio/portafolio.module';
import { TitleModule } from './widgets/title/title.module';
import { ImageItemModule } from './widgets/image-item/image-item.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from './widgets/modal/modal.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NavbarModule,
    HeaderModule,
    AboutModule,
    ContactModule,
    CopyrightModule,
    FooterModule,
    PortafolioModule,
    TitleModule,
    ImageItemModule,
    NgbModule,
    ModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
