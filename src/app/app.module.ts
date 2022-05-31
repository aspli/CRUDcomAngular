import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { MaterialModule } from './shared/material/material.module';
import { TopoComponent } from './shared/components/topo/topo.component';
import { RodapeComponent } from './shared/components/rodape/rodape.component';

import ptBr from '@angular/common/locales/pt';
import { AlertaComponent } from './shared/components/alerta/alerta.component';


registerLocaleData(ptBr);


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    AlertaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  entryComponents: [AlertaComponent],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt' },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
