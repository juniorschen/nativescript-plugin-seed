import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { TestComponent } from '@viasoft/nativescript-My_Ambient/angular';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

// import { HomeComponent } from './home.component';

const routes: Routes = [
    // { path: "", component: HomeComponent }
    { path: "", component: TestComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
