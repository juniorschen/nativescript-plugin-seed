import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { TestComponent } from './test.component';


@NgModule({
    declarations: [TestComponent],
    imports: [
        CommonModule,
        NativeScriptCommonModule
    ],
    providers: [
    ],
    exports: [TestComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class TestModule { }
