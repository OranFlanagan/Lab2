interface TodoInterface
{
    myTasks: Array<string>;
    addTask(task: string): number;
}

class Todo implements TodoInterface
{
    myTasks: Array<string> = [];

    addTask(task: string): number 
    {
        this.myTasks.push(task);
        console.log(task+" has been added to my task");
        return this.myTasks.length;
    }
    listAllTasks():void
    {
        this.myTasks.forEach((ele)=>{
        })
    }

    deleteTask(task:string):number
    {
        let index:number = this.myTasks.indexOf(task);
        if(index > -1)
        {
            this.myTasks.splice(index,1)
            console.log("Item: "+task+"has been removed from my Tasks list.");
        }
        else
        {
            console.log("Item: "+task+" was NOT found in my tasks list.");
        }
        return this.myTasks.length;
    }
    
}

let myTodos = new Todo();
myTodos.addTask("Work!");
myTodos.listAllTasks();
myTodos.addTask("Eat");