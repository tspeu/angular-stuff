import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {registerLocaleData} from '@angular/common';

// const
import { FORMATS_MOMENT } from './globals/constants';

// libs
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatNativeDateModule, MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatStepperModule } from '@angular/material/stepper';

// components
import { FullPageLayoutComponent } from './shared/layouts/full-page-layout/full-page-layout.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { ExternalCardComponent } from './components/external-card/external-card.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SideNavComponent } from './shared/header/side-nav/side-nav.component';
import { LinksMenuComponent } from './shared/header/links-menu/links-menu.component';
import { NavHeaderComponent } from './shared/header/nav-bar/nav-bar.component';
import { IconsMenuComponent } from './shared/header/icons-menu/icons-menu.component';
import { ResumeComponent } from './components/resume/resume.component';
import { CardComponent } from './components/card/card.component';
import { GraphComponent } from './components/graph/graph.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { InvoiceDataComponent } from './components/invoice-data/invoice-data.component';

// pages
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register/register-page/register-page.component';
import { RecoverAccountPageComponent } from './pages/recover-account-page/recover-account-page.component';
import { ResetPasswordPageComponent } from './pages/reset-password-page/reset-password-page.component';
import { AccountActivatedPageComponent } from './pages/register/account-activated-page/account-activated-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { BannerPageComponent } from './pages/banner-page/banner-page.component';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';

// interceptors
import { JwtInterceptor } from './interceptors/jwt-interceptor.service';

// services
import { AppInitService } from './services/app-init.service';
import { DropDownService } from './mocks/drop-down.service';
import { LinksService } from './mocks/links.service';
import { IconsService } from './mocks/icons.service';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { TermsAndConditionsPageComponent } from './pages/terms-and-conditions-page/terms-and-conditions-page.component';
import { UserMenuComponent } from './shared/header/user-menu/user-menu.component';
import {SatDatepickerModule, SatNativeDateModule} from 'saturn-datepicker';

// Pipes
import {CurrencyCustomPipe} from './pipes/currency-custom.pipe';


// Locale
import localeES from '@angular/common/locales/es';
import localeDO from '@angular/common/locales/es-DO';
import localePR from '@angular/common/locales/es-PR';
import localeHN from '@angular/common/locales/es-HN';
import localeSV from '@angular/common/locales/es-SV';
import localeGT from '@angular/common/locales/es-GT';
import localePA from '@angular/common/locales/es-PA';
import localeCR from '@angular/common/locales/es-CR';
import localeBO from '@angular/common/locales/es-BO';
import localePY from '@angular/common/locales/es-PY';
import localeUY from '@angular/common/locales/es-UY';
import localePE from '@angular/common/locales/es-PE';
import localeEC from '@angular/common/locales/es-EC';
import localeCL from '@angular/common/locales/es-CL';
import localeAR from '@angular/common/locales/es-AR';
import localeCO from '@angular/common/locales/es-CO';
import localeMX from '@angular/common/locales/es-MX';
import localeVE from '@angular/common/locales/es-VE';
import localeBR from '@angular/common/locales/es-BR';
import localeCU from '@angular/common/locales/es-CU';
import localeGQ from '@angular/common/locales/es-GQ';
import localePT from '@angular/common/locales/pt';
import localeNI from '@angular/common/locales/es-NI';
import localeUS from '@angular/common/locales/es-US';

import * as moment from 'moment';
import { LoadingComponent } from './components/loading/loading.component';

registerLocaleData(localeES, 'es');
registerLocaleData(localeDO, 'do');
registerLocaleData(localePR, 'pr');
registerLocaleData(localeHN, 'hn');
registerLocaleData(localeSV, 'sv');
registerLocaleData(localeGT, 'gt');
registerLocaleData(localePA, 'pa');
registerLocaleData(localeCR, 'cr');
registerLocaleData(localeBO, 'bo');
registerLocaleData(localePY, 'py');
registerLocaleData(localeUY, 'uy');
registerLocaleData(localePE, 'pe');
registerLocaleData(localeEC, 'ec');
registerLocaleData(localeCL, 'cl');
registerLocaleData(localeAR, 'ar');
registerLocaleData(localeCO, 'co');
registerLocaleData(localeMX, 'mx');
registerLocaleData(localeVE, 've');
registerLocaleData(localeBR, 'br');
registerLocaleData(localeCU, 'cu');
registerLocaleData(localeGQ, 'gq');
registerLocaleData(localePT, 'pt');
registerLocaleData(localeNI, 'ni');
registerLocaleData(localeUS, 'us');

moment.locale('es');


// initialize app
export function initializeApp(appInitService: AppInitService) {
  return (): Promise<any> => {
    return appInitService.Init();
  };
}

@NgModule({
   declarations: [
      AppComponent,
      ExternalCardComponent,
      LoginPageComponent,
      FullPageLayoutComponent,
      MainLayoutComponent,
      RegisterPageComponent,
      HomePageComponent,
      NavHeaderComponent,
      FooterComponent,
      SideNavComponent,
      LinksMenuComponent,
      IconsMenuComponent,
      AccountActivatedPageComponent,
      RecoverAccountPageComponent,
      ResetPasswordPageComponent,
      BannerPageComponent,
      CardComponent,
      ResumeComponent,
      GraphComponent,
      WelcomePageComponent,
      ErrorPageComponent,
      TermsAndConditionsPageComponent,
      UserMenuComponent,
      PersonalDataComponent,
      InvoiceDataComponent,
      UserProfilePageComponent,
      CurrencyCustomPipe,
      LoadingComponent
   ],
   imports: [
      BrowserModule,
      MatDatepickerModule,
      MatButtonModule,
      AppRoutingModule,
      MDBBootstrapModule.forRoot(),
      MatInputModule,
      MatTableModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
      NgSelectModule,
      FormsModule,
      NgxPaginationModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      NgSelectModule,
      MatStepperModule,
      SatDatepickerModule,
      SatNativeDateModule
   ],
   exports: [
      MatDatepickerModule,
      MatNativeDateModule,
   ],
   providers: [
      AppInitService,
      LinksService,
      DropDownService,
      IconsService,
      { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [ AppInitService ], multi: true},
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      { provide: MAT_DATE_LOCALE, useValue: 'es' },
      { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
      { provide: MAT_DATE_FORMATS, useValue: FORMATS_MOMENT }
   ],

   bootstrap: [AppComponent]
})
export class AppModule { }
