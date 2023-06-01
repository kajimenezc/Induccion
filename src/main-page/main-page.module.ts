import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  imports: [BrowserModule, CommonModule],
  declarations: [
    MainPanelComponent,
    CarouselComponent,
    NavbarComponent,
    CardsComponent,
  ],
  bootstrap: [MainPanelComponent],
})
export class MainPageModule {}
