var Todo = /** @class */ (function () {
    function Todo() {
        this.myTasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.myTasks.push(task);
        console.log(task + " has been added to my task");
        return this.myTasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.myTasks.forEach(function (ele) {
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.myTasks.indexOf(task);
        if (index > -1) {
            this.myTasks.splice(index, 1);
            console.log("Item: " + task + "has been removed from my Tasks list.");
        }
        else {
            console.log("Item: " + task + " was NOT found in my tasks list.");
        }
        return this.myTasks.length;
    };
    return Todo;
}());
var myTodos = new Todo();
myTodos.addTask("Work!");
myTodos.listAllTasks();
myTodos.addTask("Eat");
