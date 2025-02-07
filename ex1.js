var myArray = [];
function addTask(task) {
    myArray.push(task);
    console.log(task + " has been added to my task");
    return myArray.length;
}
function listAllTasks() {
    myArray.forEach(function (ele) {
        console.log("Item: " + ele + " is on my tasks");
    });
}
function deleteTask(task) {
    var index = myArray.indexOf(task);
    if (index > -1) {
        myArray.splice(index, 1);
        console.log("Item: " + task + "has been removed from my Tasks list.");
    }
    else {
        console.log("Item: " + task + " was NOT found in my tasks list.");
    }
    return myArray.length;
}
addTask("Work");
addTask("Eat");
listAllTasks();
deleteTask("Sleep");
