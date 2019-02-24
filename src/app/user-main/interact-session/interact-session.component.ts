import { Component, Input, OnInit } from "@angular/core";
import { Action } from "src/app/actions.model";

@Component({
    selector: "app-interact-session",
    templateUrl: "./interact-session.component.html",
    styleUrls: ["./interact-session.component.css"],
})
export class InteractSessionComponent implements OnInit {
    public actionIndex = 0;
    @Input() public actionsCollectionData: Action[];
    public actionsOrder: string[] = ["dynamic", "image", "text", "visual"];
    public currentAction = "";

    constructor() {}

    public executeNextAction() {
        if (this.actionIndex >= this.actionsOrder.length - 1) {
            console.log("Actions Done!");
            this.currentAction = "";
        } else {
            this.actionIndex = this.actionIndex + 1;
            this.runDeterminedAction();
        }
    }

    public getCurrentAction() {
        return this.actionsCollectionData[this.actionIndex].type;
    }

    public ngOnInit() {
        this.runDeterminedAction();
    }

    public runDeterminedAction() {
        this.currentAction = this.actionsOrder[this.actionIndex];
    }
}
