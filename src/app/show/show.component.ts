import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {Task} from "../task";
import {AppService} from "../app.service";

@Component({
    moduleId: module.id,
    selector: 'show',
    templateUrl: './show.component.html',
    styleUrls: ['']
})
export class ShowComponent implements OnInit{
    tasks:Task[] = [];
    constructor(private router: Router, private service: AppService) {}
    ngOnInit() {
        this.refresh()
    }

    refresh(){
        this.service.getData().subscribe((data:any) =>{
            this.tasks=data;

        }, (err:any)=>{
            console.error(err)
        }, ()=>{
            console.log("Completed.")
        });
    }

    edit(i:number){
        this.router.navigate(['edit',this.tasks[i]._id])
    }
    done(i:any){
        this.service.delete(this.tasks[i]._id);
         this.refresh();
    }
}
