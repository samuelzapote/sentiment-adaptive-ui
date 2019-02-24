import { Component, Input, OnInit } from "@angular/core";
import { first } from "rxjs/operators";
import { Action } from "src/app/actions.model";
import { SentimentService } from "src/app/core/sentiment.service";

@Component({
    selector: "app-interact-session",
    templateUrl: "./interact-session.component.html",
    styleUrls: ["./interact-session.component.css"],
})
export class InteractSessionComponent implements OnInit {
    public actionIndex = 0;
    @Input() public actionsCollectionData: Action[];
    public collectiveResponseData = "";
    public currentAction: Action;

    public constructor(private sentimentService: SentimentService) {}

    public executeNextAction(selectedData: string) {
        if (this.actionIndex >= this.actionsCollectionData.length - 1) {
            console.log("Actions Done!");
            this.currentAction = undefined;
            this.publishResponseData(this.collectiveResponseData);
        } else {
            this.collectiveResponseData += selectedData + " ";
            this.actionIndex = this.actionIndex + 1;
            this.runDeterminedAction();
        }
    }

    public getCurrentAction() {
        return this.currentAction;
    }

    public ngOnInit() {
        this.runDeterminedAction();
    }

    public publishResponseData(responseData: string) {
        return this.sentimentService
            .getPrediction(responseData)
            .pipe(first())
            .subscribe((r) => {
                console.log(r);
            });
    }

    public runDeterminedAction() {
        this.currentAction = this.actionsCollectionData[this.actionIndex];
    }
}
