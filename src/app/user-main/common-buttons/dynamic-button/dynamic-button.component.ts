import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: "app-dynamic-button",
    templateUrl: "./dynamic-button.component.html",
    styleUrls: ["./dynamic-button.component.css"],
})
export class DynamicButtonComponent implements OnInit {
    @Output() public actionComplete: EventEmitter<any> = new EventEmitter();
    @Input() public actionData: any;

    constructor() {}

    public ngOnInit() {}

    public onActionComplete(selected: string) {
        this.actionComplete.emit(selected);
    }
}
