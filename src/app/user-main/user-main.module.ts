import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

import { SharedModule } from "../shared/shared.module";

import { DynamicButtonComponent } from "./common-buttons/dynamic-button/dynamic-button.component";
import { ImageButtonComponent } from "./common-buttons/image-button/image-button.component";
import { TextButtonComponent } from "./common-buttons/text-button/text-button.component";
import { VisualButtonComponent } from "./common-buttons/visual-button/visual-button.component";
import { InteractSessionComponent } from "./interact-session/interact-session.component";
import { UserMainRoutingModule } from "./user-main-routing.module";
import { UserMainComponent } from "./user-main.component";

@NgModule({
    declarations: [
        UserMainComponent,
        ImageButtonComponent,
        TextButtonComponent,
        VisualButtonComponent,
        DynamicButtonComponent,
        InteractSessionComponent,
    ],
    imports: [CommonModule, UserMainRoutingModule, SharedModule],
})
export class UserMainModule {}
