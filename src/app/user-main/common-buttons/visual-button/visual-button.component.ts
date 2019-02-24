import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
    selector: "app-visual-button",
    templateUrl: "./visual-button.component.html",
    styleUrls: ["./visual-button.component.css"],
})
export class VisualButtonComponent implements OnInit {
    @Output() public actionComplete: EventEmitter<any> = new EventEmitter();

    constructor() {}

    public ngOnInit() {}

    public onActionComplete() {
        this.actionComplete.emit(null);
    }
}
