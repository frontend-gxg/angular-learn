import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownHelperComponent } from './shared/markdown-helper/markdown-helper.component';
import { Test1Page1Component } from './test1/page1/page1.component';
import { Test1Page2Component } from './test1/page2/page2.component';
import { Test1Page3Component } from './test1/page3/page3.component';

const routes: Routes = [
  { path: "test1/page1", component: Test1Page1Component },
  { path: "test1/page2", component: Test1Page2Component },
  { path: "test1/page3", component: Test1Page3Component },
  { path: "test1/page4", component: MarkdownHelperComponent, data: { 
      title: "LATEX", 
      data: require("raw-loader!./test1/markdown/page4.md").default
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
