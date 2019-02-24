import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LandingViewComponent } from "./landing-view/landing-view.component";

const routes: Routes = [
    {
        path: "",
        component: LandingViewComponent,
    },
    {
        path: "control",
        loadChildren: "./user-main/user-main.module#UserMainModule",
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
