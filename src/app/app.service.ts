import {Injectable} from '@angular/core'
import {Task} from "./task";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Http, Headers} from "@angular/http";

@Injectable()
export class AppService{



    constructor(private http:Http){}

    tasks: Task[] = [];

    add(task:Task){
       /*if (this.tasks.indexOf(task) == -1) {
            this.tasks.push(task);
        }*/
        this.postData(task).subscribe((data:any) =>{
            // alert(JSON.stringify(data));
            // this.tasks=data;
            // data.map((el:any)=>this.service.tasks.push(new Task(JSON.parse(el))))

        }, (err:any)=>{
            console.log(err)
        }, ()=>{
            console.log("Completed.")
        });

    }

    delete(index:string){

        // this.tasks.splice(+index, 1);
        this.deleteData(index).subscribe((data:any) =>{
            // alert(JSON.stringify(data));
            // this.tasks=data;
            // data.map((el:any)=>this.service.tasks.push(new Task(JSON.parse(el))))

        }, (err:any)=>{
            console.log("Error occured while deleting")
        }, ()=>{
            console.log("Completed.")
        });


    }

    update(task:Task){
        // if (this.tastks.indexOf(task) == -1) {
        //     this.tasks[index] = task;
        // }

        /**
         * this.tasks.map(task=> {
            if(task._id == id) return task; else return new Task("","","","","");
        })
         */

        this.updateData(task).subscribe((data:any) =>{
            // alert(JSON.stringify(data));
            // this.tasks=data;
            // data.map((el:any)=>this.service.tasks.push(new Task(JSON.parse(el))))

        }, (err:any)=>{
            console.error(err)
        }, ()=>{
            console.log("Completed.")
        });

    }
/*
    getDataWithObservable():Observable<any>{
        return Observable.of<any>(this.tasks);
      // return Observable.throw<any>(new Error("error"));

    }

    getDataWithPromise(){
        return Promise.resolve<any>(this.tasks);
        // return Promise.reject<any>(new Error("error"));
    }*/

    getData():Observable<any> {
        //First we define header before every http call.
        let jsonHeaders = new Headers({
            'Content-Type': 'application/json'
        })

        return this.http.get('http://localhost:9000/get/all', {headers:jsonHeaders})
            .map((response:any)=>{
            return this.extractData(response);
        });

    }

    deleteData(id:string):Observable<any> {
        //First we define header before every http call.
        let jsonHeaders = new Headers({
            'Content-Type': 'application/json'
        })

        return this.http.get('http://localhost:9000/remove/'+id, {headers:jsonHeaders})
            .map((response:any)=>{
                return this.extractData(response);
            });

    }

    postData(task:Task):Observable<any>{
        //First we define header before every http call.
        let jsonHeaders = new Headers({
            'Content-Type': 'application/json'
        })

        let obj = {
            date: task.date,
            title: task.title,
            description: task.description,
            priority: task.priority
        };

        return this.http.post('http://localhost:9000/add', obj, {headers:jsonHeaders})
            .map((response:any)=>{
                return this.extractData(response)
                }).catch((e:any)=>{
                console.log("Something went wrong with post.");
                return Observable.throw<any>(new Error("error"));
            });
    }

    updateData(task:Task):Observable<any>{
        //First we define header before every http call.
        let jsonHeaders = new Headers({
            'Content-Type': 'application/json'
        })

        let obj = {
            _id:task._id,
            date: task.date,
            title: task.title,
            description: task.description,
            priority: task.priority
        };

        return this.http.post('http://localhost:9000/update', obj, {headers:jsonHeaders})
            .map((response:any)=>{
                return this.extractData(response)
            }).catch((e:any)=>{
                console.log("Something went wrong with post.");
                return Observable.throw<any>(new Error("error"));
            });
    }

    extractData(res:any){
        let errMsg:string;
        let body = res.json();
        return body;
    }
}