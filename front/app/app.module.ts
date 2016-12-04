import {NgModule, APP_INITIALIZER, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule, Response}    from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginFormComponent } from "./login/login-form.component";
import { RoomComponent } from "./room/room-page.component";
import {NavbarComponent} from "./shared/navbar.component";
import {SidenavComponent} from "./room/side-nav.component";
import {RoomContentComponent} from "./room/room-content.component";
import {NextActivityComponent} from "./room/event/next-activity.component";
import {ProblemsComponent} from "./room/problem/problems.component";
import {FeaturesComponent} from "./room/feature/features.component";
import {NewRoomComponent} from "./room/new-room.component";
import {NewActivityComponent} from "./room/event/new-activity.component";
import {NewProblemComponent} from "./room/problem/new-problem.component";
import {SelectFeatureComponent} from "./room/feature/select-feature.component";
import {RegisterFormComponent} from "./login/register-form.component";

const appRoutes : Routes = [
    {path: "", component: LoginFormComponent, pathMatch: "full"},
    {path: "login", component: LoginFormComponent},
    {path: "room/:id", component: RoomComponent},
    {path: "register", component: RegisterFormComponent}
];

@NgModule({
    imports: [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpModule],
    declarations: [
        AppComponent,
        LoginFormComponent,
        RoomComponent,
        NavbarComponent,
        SidenavComponent,
        RoomContentComponent,
        NextActivityComponent,
        ProblemsComponent,
        FeaturesComponent,
        NewRoomComponent,
        NewActivityComponent,
        NewProblemComponent,
        SelectFeatureComponent,
        RegisterFormComponent
    ],
    bootstrap:    [ AppComponent ]
})


export class AppModule {

}
