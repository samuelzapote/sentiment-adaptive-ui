import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: "app-text-button",
    templateUrl: "./text-button.component.html",
    styleUrls: ["./text-button.component.css"],
})
export class TextButtonComponent implements OnInit {
    @Output() public actionComplete: EventEmitter<any> = new EventEmitter();
    @Input() public actionData: any;

    constructor() {}

    public ngOnInit() {}

    public onActionComplete(selected: string) {
        this.actionComplete.emit(selected);
    }
}
