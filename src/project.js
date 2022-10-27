import {toDate, isToday, isThisWeek, subDays} from 'date-fns';

class Project{
    constructor(name){
        this.name = name
        this.tasks = []
    }

    setName(name){
        this.name = name;
    }

    setTask(task){
        this.task = task;
    }

    getName(){
        return this.name;
    }

    getTask(){
        return this.task;
    }

    addTask(task){
        this.tasks.push(task);
    }

    removeTask(task){
        this.task.splice(this.task.indexOf(task), 1);
    }

}

export default Project;