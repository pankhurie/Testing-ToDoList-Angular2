export class Task{
    _id:string;
    date:string;
    title:string;
    description:string;
    priority:string;

    constructor(date?: string, title?: string, description?: string, priority?: string, _id?:string) {
        if(date&&title&&description&&priority){
            this.date = date;
            this.title = title;
            this.description = description;
            this.priority = priority;
        }else if(date&&title&&description&&priority&&_id){
            this.date = date;
            this.title = title;
            this.description = description;
            this.priority = priority;
            this._id=_id;
        }
        else{
            date=null;
            title=null;
            description=null;
            priority=null;
            _id=null;
        }
    }
}