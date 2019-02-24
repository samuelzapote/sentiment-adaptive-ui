import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable, of } from "rxjs";
import { map, switchMap } from "rxjs/operators";

import { EngagedCase } from "../shared/models/engaged-case.model";

export interface SentimentResult {
    name: string;
    score: number;
}

@Injectable({
    providedIn: "root",
})
export class DatabaseService {
    constructor(private firestore: AngularFirestore) {}

    // addEngagedCase adds an EngagedCase to the firestore database
    public addEngagedCase(data: EngagedCase) {
        // Insert the given data into the "cases" collection
        this.firestore.collection("cases").add(data);
    }

    public getSentimentResults(): Observable<SentimentResult[]> {
        // Retrieve a real-time updated list
        return this.firestore.collection<SentimentResult>("sentiments").valueChanges();
    }
}
