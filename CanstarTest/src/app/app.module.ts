import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatToolbarModule} from '@angular/material';
import { MatIconModule} from '@angular/material';
import { InsuranceCompanyComponent } from './insurance-company/insurance-company.component';
import { DataCompanyComponent } from './data-company/data-company.component';
import { RouteMouduleModule} from './route-moudule/route-moudule.module';
import { MatChipsModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    InsuranceCompanyComponent,
    DataCompanyComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    RouteMouduleModule,
    MatChipsModule,
    MatFormFieldModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
