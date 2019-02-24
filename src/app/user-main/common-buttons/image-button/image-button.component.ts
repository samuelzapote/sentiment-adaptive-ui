import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
    selector: "app-image-button",
    templateUrl: "./image-button.component.html",
    styleUrls: ["./image-button.component.css"],
})
export class ImageButtonComponent implements OnInit {
    @Output() public actionComplete: EventEmitter<any> = new EventEmitter();

    constructor() {}

    public ngOnInit() {}

    public onActionComplete() {
        this.actionComplete.emit(null);
    }
}
