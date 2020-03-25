import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { SalesComponent } from './sales/sales.component';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { DoCheckExampleComponent } from './do-check-example/do-check-example.component';
import { NgOninitExampleComponent } from './ng-oninit-example/ng-oninit-example.component';
import { NgOnchangesExampleComponent } from './ng-onchanges-example/ng-onchanges-example.component';
import { NgAftercontentinitExampleComponent,
  AfterContentInitChildComponent,
  AfterContentInitParentComponent } from './ng-aftercontentinit-example/ng-aftercontentinit-example.component';
import { NgAftercontentcheckedExampleComponent,
  AfterContentCheckChildComponent,
  AfterContentCheckParentComponent } from './ng-aftercontentchecked-example/ng-aftercontentchecked-example.component';
import { NgAfterviewinitExampleComponent,
  AfterViewInitChildComponent,
  AfterViewInitParentComponent } from './ng-afterviewinit-example/ng-afterviewinit-example.component';
import { NgAfterviewcheckedExampleComponent,
  AfterViewCheckedChildComponent,
  AfterViewCheckedParentComponent } from './ng-afterviewchecked-example/ng-afterviewchecked-example.component';
import { NgOndestroyExampleComponent } from './ng-ondestroy-example/ng-ondestroy-example.component';
import { NgOnchangesparentComponent } from './ng-onchangesparent/ng-onchangesparent.component';
import { DoCheckParentComponent } from './do-check-parent/do-check-parent.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { LessonComponent } from './lesson/lesson.component';
import { StudentLessonComponent } from './student-lesson/student-lesson.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CustomerComponent } from './customer/customer.component';
import { StoreComponent } from './store/store.component';
import { DiscDirective } from './disc.directive';
import { DiscountSplashComponent } from './discount-splash/discount-splash.component';
import { ProductDiscComponent } from './product-disc/product-disc.component';
import { NewPriceComponent } from './new-price/new-price.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { DiscService } from './disc.service';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    SalesComponent,
    DoCheckExampleComponent,
    NgOninitExampleComponent,
    NgOnchangesExampleComponent,
    NgAftercontentinitExampleComponent,
    AfterContentInitChildComponent,
    AfterContentInitParentComponent,
    NgAftercontentcheckedExampleComponent,
    AfterContentCheckChildComponent,
    AfterContentCheckParentComponent,
    NgAfterviewinitExampleComponent,
    AfterViewInitChildComponent,
    AfterViewInitParentComponent,
    NgAfterviewcheckedExampleComponent,
    AfterViewCheckedChildComponent,
    AfterViewCheckedParentComponent,
    NgOndestroyExampleComponent,
    NgOnchangesparentComponent,
    DoCheckParentComponent,
    TeacherComponent,
    StudentComponent,
    LessonComponent,
    StudentLessonComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CustomerComponent,
    StoreComponent,
    DiscDirective,
    DiscountSplashComponent,
    ProductDiscComponent,
    NewPriceComponent,
    DynamicComponent,
    ParentComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DatePipe,
    CurrencyPipe,
    DiscService
  ],
  entryComponents: [ ProductDiscComponent, NewPriceComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
