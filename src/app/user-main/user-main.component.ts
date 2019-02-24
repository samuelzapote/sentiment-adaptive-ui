import { Component, OnInit } from "@angular/core";

import { Action } from "../actions.model";
import { DatabaseService } from '../core/database.service';

@Component({
    selector: "app-user-main",
    templateUrl: "./user-main.component.html",
    styleUrls: ["./user-main.component.css"],
})
export class UserMainComponent implements OnInit{
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
    public emotionResult: any;

    constructor(private databaseService: DatabaseService) {
    }

    ngOnInit() {
        this.emotionResult = this.databaseService.getSentimentResults();
    }

    public onInitSession() {
        this.interacting = !this.interacting;
    }
}
