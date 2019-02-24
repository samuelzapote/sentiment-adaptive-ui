import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";

@NgModule({
    declarations: [],
    imports: [AngularFirestoreModule, AngularFireAuthModule],
    exports: [],
})
export class CoreModule {}
