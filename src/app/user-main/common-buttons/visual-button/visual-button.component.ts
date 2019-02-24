import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: "app-visual-button",
    templateUrl: "./visual-button.component.html",
    styleUrls: ["./visual-button.component.css"],
})
export class VisualButtonComponent implements OnInit {
    @Output() public actionComplete: EventEmitter<any> = new EventEmitter();
    @Input() public actionData: any;

    constructor() {}

    public ngOnInit() {}

    public onActionComplete(selected: string) {
        this.actionComplete.emit(selected);
    }
}
