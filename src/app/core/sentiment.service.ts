import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

export interface SentimentResult {
    name: string;
    score: number;
}

@Injectable({
    providedIn: "root",
})
export class SentimentService {
    public constructor(private http: HttpClient) {}

    public getPrediction(phrase: string) {
        return this.http.post<SentimentResult>(environment.backendUrl, { phrase });
    }
}
