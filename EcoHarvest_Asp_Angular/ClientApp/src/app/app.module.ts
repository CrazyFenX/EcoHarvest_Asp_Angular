import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseButtonComponent } from './base-button/base-button.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PostCardWrapperComponent } from './post-card-wrapper/post-card-wrapper.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CategoryCardWrapperComponent } from './category-card-wrapper/category-card-wrapper.component';
import { FooterComponent } from './footer/footer.component';
import { FooterWrapperComponent } from './footer-wrapper/footer-wrapper.component';
import { HeaderComponent } from './header/header.component';
import { ContactPlateComponent } from './contact-plate/contact-plate.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseButtonComponent,
    PostCardComponent,
    PostCardWrapperComponent,
    CategoryCardComponent,
    CategoryCardWrapperComponent,
    FooterComponent,
    FooterWrapperComponent,
    HeaderComponent,
    ContactPlateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
