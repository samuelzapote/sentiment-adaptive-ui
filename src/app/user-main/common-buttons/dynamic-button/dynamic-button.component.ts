import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
    selector: "app-dynamic-button",
    templateUrl: "./dynamic-button.component.html",
    styleUrls: ["./dynamic-button.component.css"],
})
export class DynamicButtonComponent implements OnInit {
    @Output() public actionComplete: EventEmitter<any> = new EventEmitter();

    constructor() {}

    public ngOnInit() {}

    public onActionComplete() {
        this.actionComplete.emit(null);
    }
}
