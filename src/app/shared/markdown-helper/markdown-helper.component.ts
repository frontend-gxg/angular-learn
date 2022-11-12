import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "markdown-helper",
    templateUrl: "./markdown-helper.component.html",
})
export class MarkdownHelperComponent {
    title: string = "";
    data: string = "";

    constructor(private router: ActivatedRoute) {
        this.title = this.router.snapshot.data["title"];
        this.data = this.router.snapshot.data["data"];
    }
}
