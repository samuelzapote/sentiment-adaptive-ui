import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: "app-image-button",
    templateUrl: "./image-button.component.html",
    styleUrls: ["./image-button.component.css"],
})
export class ImageButtonComponent implements OnInit {
    @Output() public actionComplete: EventEmitter<any> = new EventEmitter();
    @Input() public actionData: any;

    public emojis = {
        good: '../../../../assets/images/emojis/1f600.png',
        okay: '../../../../assets/images/emojis/1f600.png',
        great: '../../../../assets/images/emojis/1f600.png',
        bad: '../../../../assets/images/emojis/1f600.png',
        eh: '../../../../assets/images/emojis/1f600.png'
    }

    constructor() {}

    public ngOnInit() {}

    public onActionComplete(selected: string) {
        this.actionComplete.emit(selected);
    }
}
