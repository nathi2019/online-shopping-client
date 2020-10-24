import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PagesModule} from './pages/pages.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedService} from './services/shared.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PagesModule,
        BrowserAnimationsModule,
        MatToolbarModule
    ],
    providers: [SharedService],
    bootstrap: [AppComponent]

})
export class AppModule {
}
