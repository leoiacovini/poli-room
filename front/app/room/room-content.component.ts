import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router, Params, NavigationExtras, ActivatedRoute} from '@angular/router';
import {HttpService} from "../shared/http.service";
import {Response} from "@angular/http";
import 'rxjs/add/operator/switchMap';

@Component({
    selector: `room-content`,
    template: `
    <div class="main-space">
        <div class="main-container">
          <div class="row">
            <h1 class="title">{{this.name}}</h1>
            <h5 class="subtitle">{{this.building}}</h5>
            <br/>

            <div class="row">
              <room-next-activity [roomId]="roomId"></room-next-activity>
              <room-problems [roomId]="roomId"></room-problems>
            </div> <!-- end row of MANUTENÇÃO and PROXIMAS ATIVIDADES -->
            <div class="row">
              <room-features [roomId]="roomId"></room-features>
            </div> <!-- FEATURES ROW -->
          </div> <!-- end main row -->

        </div>
    </div>
    <new-activity-modal></new-activity-modal>
    `
})
export class RoomContentComponent implements OnInit {

    constructor(private http: HttpService, private route: ActivatedRoute, private router: Router) {
    }


    roomId: number;
    name: string;
    building: string;

    ngOnInit() {
        this.route.params.switchMap((params: Params) => this.roomId = params["id"]).subscribe(v => this.getRoom());
    }

    getRoom() {
        this.http.req({url: "get_room",
            method: "get",
            replaceMap: {id: this.roomId},
            handler: this.setRoom.bind(this)})
    }

    setRoom(response: Response) {
        let json = response.json();
        this.name = json["name"];
        this.building = json["building"];
    }

}
