import {Component, OnInit} from '@angular/core'
import {Router, ActivatedRoute} from '@angular/router'
import {Task} from '../task'
import {AppService} from "../app.service";

@Component({
    moduleId: module.id,
    selector: 'create',
    templateUrl: './create.component.html',
    styleUrls: ['']
})

export class CreateComponent  implements OnInit{
    task:Task=new Task("","","","");
    index:string;
    tasks:Task[]=[]
    constructor(private router: Router,private route: ActivatedRoute, private service:AppService) {}
    ngOnInit(){
        this.route.params.subscribe((data: any) => {
            this.index = data.i;
            if(this.index){
                this.service.getData().subscribe((data:any) =>{
                    this.tasks=data;
                    this.task = this.tasks.filter(x=>x._id==this.index)[0];
                }, (err:any)=>{
                    console.error(err)
                }, ()=>{
                    console.log("Completed.")
                });

            }
        });

    }



    submit(){
        if(this.index){
            // this.service.tasks[this.index]=this.task;
            // this.service.update(this.index, this.task);
            this.service.update(this.task);
        }else{
            // this.service.tasks.push(this.task);
            this.service.add(this.task);
        }

        this.router.navigate(['show']);
        // alert(JSON.stringify(this.task));
    }

}
