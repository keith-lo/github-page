import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageAboutmeComponent } from './components/page-aboutme/page-aboutme.component';
import { PageHomeComponent } from './components/page-home/page-home.component';

//Route map
const maps : Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: PageHomeComponent },
  { path: 'about', component: PageAboutmeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    PageAboutmeComponent,
    PageHomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(maps),
    TranslateModule.forRoot({
        provide: TranslateLoader,
        useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
        deps: [Http] 
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
