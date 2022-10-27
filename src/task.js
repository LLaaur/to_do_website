class Task{
    constructor(name, dueDate){
        this.name = name
        this.dueDate = dueDate
    }

    setName(name){
        this.name = name;
    }

    setDueDate(dueDate){
        this.dueDate = dueDate
    }

    getName(){
        return this.name
    }

    getDueDate(){
        return this.dueDate
    }
}

export default Task