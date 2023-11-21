import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ForumComponent } from './components/pages/forum/forum.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from "./components/carousel/carousel.component";


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ForumComponent,
        NavbarComponent,
        FooterComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SlickCarouselModule,
        CarouselComponent
    ]
})
export class AppModule { }
