import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

import { appConfig } from './constants/app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private translate : TranslateService){
    this.initLanguagePack();
  }

  initLanguagePack(){
    let translate : TranslateService = this.translate;

    //Set default language
    translate.setDefaultLang(appConfig.defaultLang);
    translate.use(appConfig.defaultLang);

    let browserLang : string = translate.getBrowserLang();
    if( browserLang.match(new RegExp(appConfig.supportLangs)) ){
      //Switch to broswer language if we supported.
      //translate.use(browserLang);
    }

  }
  
}
