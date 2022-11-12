import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { MarkdownHelperComponent } from './markdown-helper/markdown-helper.component';


@NgModule({
    imports: [
        MarkdownModule.forChild(),
    ],
    declarations: [
        MarkdownHelperComponent,
    ],
})
export class SharedModule { }
