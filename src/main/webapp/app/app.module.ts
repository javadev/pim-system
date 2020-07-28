import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { PimSharedModule } from 'app/shared/shared.module';
import { PimCoreModule } from 'app/core/core.module';
import { PimAppRoutingModule } from './app-routing.module';
import { PimHomeModule } from './home/home.module';
import { PimEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    PimSharedModule,
    PimCoreModule,
    PimHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    PimEntityModule,
    PimAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class PimAppModule {}
