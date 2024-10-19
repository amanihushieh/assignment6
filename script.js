let tasks = [];
let taskId = 1;

const createTask = () => {
    let taskDescription = prompt("Enter Task Description:");
    let task = {
        id: taskId,
        description: taskDescription,
        completed: false
    };
    tasks.push(task);
    taskId++;
    console.log(`Task ${task.description} added`);

}
const viewTask = () => {
    if (tasks.length > 0) {
        let taskList = "Tasks:\n";
        tasks.forEach(task => {
            taskList += `${task.id}. ${task.description} [${task.completed ? "Completed" : "Not Completed"}]\n`;
        });
        console.log(taskList);

    } else {
        console.log("No Tasks Available");
    }

}
const toggleTaskCompletion = () => {
    let taskcomp = prompt("Enter Task Id to toggle completion");
    let task = tasks.find(task => task.id == taskcomp);
    if (task) {
        task.completed = !task.completed;
        console.log(`Task ${task.description} is now marked as ${task.completed ? "Completed" : "Not Completed"}`);
    } else {
        console.log("Task Id Not found");
    }
}

const editTask = () => {
    let taskk = prompt("Enter Task Id to edit");
    let task = tasks.find(task => task.id == taskk);
    if (task) {
        let newDescription = prompt("Enter the new Task Description");
        task.description = newDescription;
        console.log(`Task ${task.id} updated to: ${task.description}`);
    } else {
        console.log("Task Id Not found");
    }
}

const deleteTask = () => {
    let taskk = prompt("Enter Task Id to delete");
    let taskId = tasks.findIndex(task => task.id == taskk);
    if (taskId != -1) {
        tasks.splice(taskId, 1);
        console.log(`Task ${taskk} deleted`);
    } else {
        console.log("Task Id Not found");
    }
}
const searchTask = () => {
    let name = prompt("Enter name");
    let newTasks = tasks.filter(task => task.description.includes(name));
    if (newTasks.length > 0) {
        let newTaskList = "Tasks:\n";
        newTasks.forEach(task => {
            newTaskList += `${task.id}. ${task.description} [${task.completed ? "Completed" : "Not Completed"}]\n`;
        });
        console.log(newTaskList);
    } else {
        console.log("Task Not found");
    }
}


let choice;
do {
    console.log("Task Manager Menu:\n1- Add Task\n2- View Task\n3-Toggle Task completion\n4- Edit Task\n5- Delete Task\n6- Search by name\n7- Exit");
    choice = prompt("Enter your choice 1-7:");
    switch (choice) {
        case "1": {
            createTask();
            break;
        }
        case "2": {
            viewTask();
            break;
        }
        case "3": {
            toggleTaskCompletion();
            break;
        }
        case "4": {
            editTask();
            break;
        }
        case "5": {
            deleteTask();
            break;
        }
        case "6": {
            searchTask();
            break;
        }
        case "7": {
            console.log("Exiting");
            break;
        }
        default: {
            console.log("Invalid Choice, please select 1-7");
        }
    }
} while (choice != "7");

