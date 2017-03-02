import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

    // tasks: Task[];


    constructor(private service: AppService) {

    }

    /**
     * method will be called automatically when component is initialised
     */
    ngOnInit() {
        // this.tasks = this.service.tasks;
    }
}


