import { Component } from "@angular/core";

import { Action } from "../actions.model";

@Component({
    selector: "app-user-main",
    templateUrl: "./user-main.component.html",
    styleUrls: ["./user-main.component.css"],
})
export class UserMainComponent {
    public actionIndex = 0;
    public actionsCollection: Action[] = [
        {
            type: "image",
            question: "How are you feeling?",
            options: ["good", "okay", "great", "bad", "eh"],
        },
        {
            type: "text",
            question: "Is it enjoyable outside?",
            options: ["yeah", "not really", "Its nice"],
        },
        {
            type: "dynamic",
            question: "This morning was?",
            options: ["alright", "good", "pretty bad", "okay"],
        },
        {
            type: "visual",
            question: "Im really liking these colors",
            options: ["stressed", "happy", "calm", "angry"],
        },
    ];
    public interacting = false;

    constructor() {}

    public onInitSession() {
        this.interacting = !this.interacting;
    }
}
