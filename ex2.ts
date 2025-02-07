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
        //adds tasks to the aray and lets the user now
    }
    listAllTasks():void
    {
        this.myTasks.forEach((ele)=>{
        })
        //currently empty
    }

    deleteTask(task:string):number
    {
        let index:number = this.myTasks.indexOf(task);
        if(index > -1)
        {
            this.myTasks.splice(index,1)
            console.log("Item: "+task+"has been removed from my Tasks list.");
            //like in exercise 1 if the index is greater than -1 it deletes the index at 1
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
//doesnt do anything yet until listAllTasks has members
myTodos.deleteTask("Eat");
//delets task from the array but it wont because "Eat" does not exisy in the array
