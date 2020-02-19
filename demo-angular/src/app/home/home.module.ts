import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestModule } from '@viasoft/nativescript-My_Ambient/angular';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        TestModule
    ],
    declarations: [
        HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
