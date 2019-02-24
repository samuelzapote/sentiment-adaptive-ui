import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: "app-image-button",
    templateUrl: "./image-button.component.html",
    styleUrls: ["./image-button.component.css"],
})
export class ImageButtonComponent implements OnInit {
    @Output() public actionComplete: EventEmitter<any> = new EventEmitter();
    @Input() public actionData: any;

    constructor() {}

    public ngOnInit() {}

    public onActionComplete(selected: string) {
        this.actionComplete.emit(selected);
    }
}
