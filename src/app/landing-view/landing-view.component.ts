import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";

import { AuthService } from "../core/auth.service";

@Component({
    selector: "app-landing-view",
    templateUrl: "./landing-view.component.html",
    styleUrls: ["./landing-view.component.css"],
})
export class LandingViewComponent implements OnInit {
    public loggingIn = true;
    public loginForm = this.fb.group({
        accountType: [""],
        email: [""],
        password: [""],
    });
    public registering = false;

    constructor(private fb: FormBuilder, public router: Router, private auth: AuthService) {}

    public initLoginMode() {
        this.loggingIn = true;
        this.registering = false;
    }

    public initRegisterMode() {
        this.loggingIn = false;
        this.registering = true;
    }

    public ngOnInit() {
        // Check if the user is already logged in,
        // and if so, redirect them to the main page
        this.auth.user.pipe(first()).subscribe(() => {
            this.router.navigate(["control"]);
        });
    }

    public async onSubmit() {
        const data = this.loginForm.value;

        try {
            if (this.loggingIn) {
                // Log the user in
                await this.auth.login(data.email, data.password);
                this.router.navigate(["control"]);
            } else {
                // Create a new user, and then log in
                await this.auth.register(data.email, data.password);
                this.router.navigate(["control"]);
            }
        } catch (e) {
            // Debugging
            alert(e);
        }
    }
}
