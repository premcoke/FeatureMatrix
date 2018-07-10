import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { ShareRouting } from './app.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { DropDownListComponent } from '@syncfusion/ej2-ng-dropdowns';
import { TimePickerModule } from '@syncfusion/ej2-ng-calendars';
import { DatePickerModule } from '@syncfusion/ej2-ng-calendars';
import { NumericTextBoxComponent } from '@syncfusion/ej2-ng-inputs';
import { CalendarModule } from '@syncfusion/ej2-ng-calendars';
import { DateRangePickerComponent, DateRangePickerModule } from '@syncfusion/ej2-ng-calendars';
import { DateTimePickerModule } from '@syncfusion/ej2-ng-calendars';
import { CheckBoxComponent } from '@syncfusion/ej2-ng-buttons';
import { MultiSelectComponent } from '@syncfusion/ej2-ng-dropdowns';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CalComponent } from './calendar/calendar.component';
import { SidebarComponent } from '@syncfusion/ej2-ng-navigations';
import { DateComponent } from './date/date.component';
import { TimeComponent } from './time/time.component';
import { SideComponent } from './sidebar/sidebar.component';
import { RangeComponent } from './range/range.component';
import { ButtonComponent, RadioButtonComponent } from '@syncfusion/ej2-ng-buttons';
import { RangeTagComponent } from './tag/tag.component';
import { TwowayComponent } from './binding/twoway.component';
import { SampleComponent } from './sample/sample.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { DialogComponent } from '@syncfusion/ej2-ng-popups';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    SampleComponent,
    SidebarComponent,
    CalComponent,
    TwowayComponent,
    RangeTagComponent,
    NumericTextBoxComponent,
    SideComponent,
    RangeComponent,
    RadioButtonComponent,
    ButtonComponent,
    TimeComponent,
    DialogComponent,
    DateComponent,
    MultiSelectComponent,
    DropDownListComponent,
    CheckBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    HttpModule,
    DateTimePickerModule,
    DatePickerModule,
    TimePickerModule,
    DateRangePickerModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers:[ShareRouting],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
