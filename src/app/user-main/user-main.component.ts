import { Component, OnInit, DoCheck } from "@angular/core";

import { Action } from "../actions.model";
import { DatabaseService } from '../core/database.service';

@Component({
    selector: "app-user-main",
    templateUrl: "./user-main.component.html",
    styleUrls: ["./user-main.component.css"],
})
export class UserMainComponent implements OnInit, DoCheck{
    public globalActionsSequence = [];
    public actionsCollection: Action[] = [
        {
            importance: 7,
            type: "image",
            question: "How are you feeling?",
            options: ["good", "okay", "great", "bad", "eh"],
        },
        {
            importance: 6,
            type: "text",
            question: "Is it enjoyable outside?",
            options: ["yeah", "not really", "Its nice"],
        },
        {
            importance: 5,
            type: "text",
            question: "This morning was?",
            options: ["alright", "good", "pretty bad", "okay"],
        },
        {
            importance: 5,
            type: "visual",
            question: "Im really liking these colors",
            options: ["stressed", "happy", "calm", "angry"],
        },
        {
            importance: 5,
            type: "visual",
            question: "Im really liking these colors",
            options: ["stressed", "happy", "calm", "angry"],
        },
    ];
    public interacting = false;
    public emotionResult: any;
    public recentProgressColorValues: string[] = [];
    public emotionDataObservable: Promise<void>;
    public globalColor: string;

    constructor(private databaseService: DatabaseService) {
    }

    ngOnInit() {
        this.emotionDataObservable = this.databaseService.getSentimentResults().forEach((item) => {this.processMainData(item)});
    }

    ngDoCheck() {
        // console.log(this.emotionResult)
        // for (let i = 0; this.emotionResult.length; i++) {
        //     let color = '';
        //     if (Math.round(this.emotionResult[i].score * 100) > Math.round(.5 * 100)) {
        //         color = 'red';
        //     } else {
        //         color = 'green';
        //     }
        //     if (this.recentProgressColorValues.length > 5) {
        //         this.recentProgressColorValues.shift();
        //     }
        //     this.recentProgressColorValues.push(color);
        // }
    }

    public processMainData(value: any) {
        console.log(value)
        for (let i = 0; i < value.length; i++) {
            let color = '';
            if (Math.round(value[i].score * 100) > Math.round(.7 * 100)) {
                color = '#F44336';
            } else {
                color = '#8BC34A';
            }
            if (this.recentProgressColorValues.length > 6) {
                this.recentProgressColorValues.shift();
            }
            this.recentProgressColorValues.push(color);
            console.log(this.recentProgressColorValues);
        }
        let currentMood = value[value.length-1].score;
        let actionImportance = 10;
        let colorToDisplay: string = 'white';
        let amountOfActions: number = 0;
        let amountOfOptions: number = 0;

        console.log()

        switch(Math.ceil((Math.round(currentMood * 100)) / 10) * 10) { 
            case 10: { 
               //statements;
               actionImportance = 5;
               colorToDisplay = '#E3F2FD';
                amountOfOptions = 8;
                amountOfActions = 10;
               break; 
            } 
            case 20: { 
               //statements; 
               actionImportance = 5;
               colorToDisplay = '#E3F2FD';
               amountOfOptions = 8;
               amountOfActions = 10;
               break; 
            }
            case 30: { 
                //statements;
                actionImportance = 6;
                colorToDisplay = 'green';
                amountOfOptions = Math.floor(Math.random() * (8 - 6)) + 6; 
                amountOfActions = 9;
                break; 
            }
            case 40: { 
                //statements; 
                actionImportance = 6;
                colorToDisplay = 'orange';
                amountOfOptions = Math.floor(Math.random() * (7 - 5)) + 5;
                amountOfActions = 8;
                break; 
            }
            case 50: { 
                //statements;
                actionImportance = 7;
                colorToDisplay = 'yellow';
                amountOfOptions = Math.floor(Math.random() * (6 - 4)) + 4;
                amountOfActions = 8;
                break; 
            }
            case 60: { 
                //statements; 
                actionImportance = 8;
                colorToDisplay = 'pink';
                amountOfOptions = 4;
                amountOfActions = 7;
                break; 
            }
            case 70: { 
                //statements; 
                actionImportance = 9;
                colorToDisplay = '#E3F2FD';
                amountOfOptions = 4;
                amountOfActions = 6;
                break; 
            }
            case 80: { 
                //statements;
                actionImportance = 9;
                colorToDisplay = '#E3F2FD';
                amountOfOptions = 3;
                amountOfActions = 6;
                break; 
            }
            case 90: { 
                //statements; 
                actionImportance = 10;
                colorToDisplay = 'pink';
                amountOfOptions = 3;
                amountOfActions = 6;
                break; 
            }
            case 100: { 
                //statements;
                actionImportance = 10;
                colorToDisplay = '#E3F2FD';
                amountOfOptions = 3;
                amountOfActions = 6;
                break; 
            } 
            default: { 
               //statements; 
               actionImportance = 10;
               colorToDisplay = 'white';
               amountOfOptions = 4;
               amountOfActions = 6;
               break; 
            } 
        }
        const globalValues = {
            importance: actionImportance,
            color: colorToDisplay,
            optionsamnt: amountOfOptions,
            actionsamnt: amountOfActions
        };
        this.generateGlobalUiValues(globalValues); 
    }

    public onInitSession() {
        this.interacting = !this.interacting;
    }

    public generateGlobalUiValues(values) {
        console.log(values)
        this.globalColor = values.color;
        let newActionsSequence = [];
        let actionsMatchingImportance = this.actionsCollection.filter(action => {return action.importance === values.importance});
        for (let i = 0; i < values.actionsamnt.length; i++) {
            if (actionsMatchingImportance.length === 0) {

            } else {
                let filteredLength = actionsMatchingImportance.length - 1;
                let ranIndex = Math.floor(Math.random() * Math.floor(filteredLength));
                let optionsLimit = values.optionsamnt;
                let newOptionsSequence = [];
                for (let o = 0; o <= optionsLimit; o++) {
                    if (actionsMatchingImportance[ranIndex].options.length <= 0) {

                    } else {
                        let ranOptionIndex = Math.floor(Math.random() * Math.floor(actionsMatchingImportance[ranIndex].options.length -1));
                        newOptionsSequence.push(actionsMatchingImportance[ranIndex].options[ranOptionIndex]);
                        actionsMatchingImportance[ranIndex].options = actionsMatchingImportance[ranIndex].options.splice(ranOptionIndex, 1);
                    }
                }
                actionsMatchingImportance[ranIndex].options = newOptionsSequence;
                newActionsSequence.push(actionsMatchingImportance[ranIndex]);
                actionsMatchingImportance = actionsMatchingImportance.splice(ranIndex, 1);
            }
        }
        this.globalActionsSequence = newActionsSequence;
    }

    public onChangeColor(color) {

    }
}
