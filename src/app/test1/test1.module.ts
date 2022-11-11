import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { Test1RoutingModule } from './test1-routing.module';
import { Test1Page1Component } from './page1/page1.component';
import { Test1Page2Component } from './page2/page2.component';
import { Test1Page3Component } from './page3/page3.component';


@NgModule({
    imports: [
        Test1RoutingModule,
        MarkdownModule.forChild(),
    ],
    declarations: [
        Test1Page1Component,
        Test1Page2Component,
        Test1Page3Component,
    ],
})
export class Test1Module { }
