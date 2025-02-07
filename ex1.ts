let myArray: string[]=[];
//creates an empty array

function addTask(task:string):number
{
    myArray.push(task);
    console.log(task+" has been added to my task");
    return myArray.length;
}
//the function addTaask adds a string to the already created array myArray
//then prints the task onto the array

function listAllTasks():void
{
    myArray.forEach((ele)=>{
    console.log("Item: "+ele+ " is on my tasks"); 
    })
}
//when the function listAllTasks is called it iterates over the elements inside the array myArray
//for whatever is inside the array it adds a message including whatever is inside it
function deleteTask(task:string):number
{
    let index:number = myArray.indexOf(task);
    //this code looks for task inside the myArray array
    //if a task is found it makes "index" a number
    //but if not it makes it -1
    if(index > -1)
    {
        myArray.splice(index,1)
        //splice removes the index at number 1
        console.log("Item: "+task+"has been removed from my Tasks list.");
    }
    else
    {
        console.log("Item: "+task+" was NOT found in my tasks list.");
    }
    return myArray.length;
}

addTask("Work");
addTask("Eat");
//add work and eat to task
listAllTasks();
deleteTask("Sleep");
//gets rid of sleep which does not exist
