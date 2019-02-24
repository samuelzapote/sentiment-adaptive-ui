import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";

// Angular Material Modules
import { MatButtonModule } from "@angular/material/button";
import { MatCard, MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

import { LoadSceneComponent } from "./load-scene/load-scene.component";

@NgModule({
    declarations: [LoadSceneComponent],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        HttpClientModule,
    ],
    exports: [
        HttpClientModule,
        LoadSceneComponent,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
    ],
})
export class SharedModule {}
