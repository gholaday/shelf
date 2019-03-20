import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ElectronService } from './providers/electron.service';
import { WebviewDirective } from './directives/webview.directive';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CardModule } from 'primeng/card';
import { BookCardComponent } from './book-card/book-card.component';
import { TooltipModule } from 'primeng/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebviewDirective,
    BookCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CardModule,
    TooltipModule
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
