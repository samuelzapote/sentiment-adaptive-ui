import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "firebase";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    public user: Observable<User>;

    public constructor(private auth: AngularFireAuth) {
        this.user = this.auth.user;
    }

    public async login(email: string, password: string) {
        await this.auth.auth.signInWithEmailAndPassword(email, password);
    }

    public async register(email: string, password: string) {
        await this.auth.auth.createUserWithEmailAndPassword(email, password);
    }
}
