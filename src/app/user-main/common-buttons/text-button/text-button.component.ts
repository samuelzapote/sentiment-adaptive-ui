import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
    selector: "app-text-button",
    templateUrl: "./text-button.component.html",
    styleUrls: ["./text-button.component.css"],
})
export class TextButtonComponent implements OnInit {
    @Output() public actionComplete: EventEmitter<any> = new EventEmitter();

    constructor() {}

    public ngOnInit() {}

    public onActionComplete() {
        this.actionComplete.emit(null);
    }
}
