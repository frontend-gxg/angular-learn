import { Component } from "@angular/core";

@Component({
    selector: "test1-page3",
    templateUrl: "./page3.component.html",
})
export class Test1Page3Component {
    title = "PAGE3" 
    data = require("raw-loader!./data.md").default;
}
