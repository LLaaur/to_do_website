function Interface() {


    // toggle light/dark theme on checkbox click
    const checkbox = document.getElementById('darkmode-toggle');
    const sideMenu = document.querySelector('.side-menu');
    const rightPanel = document.querySelector('.right-panel');

    checkbox.addEventListener('input', () => {

        const nav = document.querySelector('.navbar');

        if (checkbox.checked) {
            nav.style.backgroundColor = '#202025';
            nav.style.color = 'white';
            sideMenu.style.backgroundColor = '#2b2b2e';
            sideMenu.style.color = 'white';
            rightPanel.style.backgroundColor = '#1a1a1b';
            rightPanel.style.color = 'white';
        }

        else {
            nav.style.backgroundColor = '#FAF6F5';
            nav.style.color = 'black';
            sideMenu.style.backgroundColor = '#F7F8F3';
            sideMenu.style.color = 'black';
            rightPanel.style.backgroundColor = '#f8f3f0';
            rightPanel.style.color = 'black';
        }
    });


    // minimize side-menu on hamburger menu button click


    const menuBtn = document.querySelector('.menu-button');
    menuBtn.addEventListener('click', () => {
        sideMenu.classList.toggle('minimize');
        rightPanel.style.width = '100%';
    })


    const addTask = document.querySelector('.add-task');

    const task = document.createElement('div');

    const rightPanelTask = document.querySelector('.current-task');

    // display text field on add task click
    const addTaskPopup = document.getElementById('add-task-popup');
    const addCancelTaskButtons = document.querySelector('.add-or-cancel-task-buttons');

    addTask.addEventListener('click', () => {
        addTaskPopup.style.display = 'block'
        addTaskPopup.value = ''
        addTask.style.display = 'none'
        addCancelTaskButtons.style.display = 'flex';
    })

    const cancelTaskButton = document.querySelector('.cancel-task-button');

    cancelTaskButton.addEventListener('click', () => {
        addTaskPopup.style.display = 'none';
        addCancelTaskButtons.style.display = 'none';
        addTask.style.display = 'flex'
    })


    // create task and display it in the task list after clicking the add button
    const addTaskButton = document.querySelector('.add-task-button');
    const tasks = document.querySelector('.tasks');
    const listOfTasks = document.querySelector('ul');


    const inbox = document.querySelector('.inbox');
    const today = document.querySelector('.today');
    const tomorrow = document.querySelector('.tomorrow');
    const nextWeek = document.querySelector('.this-week');

    const taskList = document.querySelector('.task-list');

    inbox.addEventListener('click', () => {
        rightPanelTask.textContent = inbox.textContent
        addTask.style.display = 'flex';
        taskList.style.display = 'flex';
        task.style.display = 'flex'
    })

    today.addEventListener('click', () => {
        rightPanelTask.textContent = today.textContent
        addTask.style.display = 'none';
        task.style.display = 'none'
    })

    tomorrow.addEventListener('click', () => {
        rightPanelTask.textContent = tomorrow.textContent
        addTask.style.display = 'none';
        task.style.display = 'none'
    })

    nextWeek.addEventListener('click', () => {
        rightPanelTask.textContent = nextWeek.textContent
        addTask.style.display = 'none';
        task.style.display = 'none'
    })


        let defaultTaskList = [];
        let myTaskList = localStorage.getItem("listOfTasks");
        myTaskList = JSON.parse((myTaskList) || JSON.stringify(defaultTaskList));

    function saveToLocalStorage() {

        localStorage.setItem("listOfTasks", JSON.stringify(myTaskList));

    }

    function AddTaskItem(title){
        return{
            title
        }
    }

    function readTaskInput(){
        let taskTitle = document.getElementById('add-task-popup').value;

        const newTask = AddTaskItem(taskTitle)
        myTaskList.push(newTask)


        saveToLocalStorage()
        console.log(myTaskList);

    }

    
    function displayTask(){

        const currentTask = document.createElement('li');

        const leftSide = document.createElement('div');

        const taskCheck = document.createElement('i');
        taskCheck.classList.add('fa-regular');
        taskCheck.classList.add('fa-circle');

        const taskName = document.createElement('h3');
        taskName.classList.add('.taskName');
        if (addTaskPopup.value == '') {
            alert('Tasks must have a name')
            return
        }
        else {
            taskName.textContent = addTaskPopup.value
        }

        currentTask.addEventListener('click', () => {
            rightPanelTask.textContent = taskName.textContent
        })

        const rightSide = document.createElement('div');

        const taskDate = document.createElement('h3');
        taskDate.textContent = 'No date';

        const removeTaskBtn = document.createElement('i');
        removeTaskBtn.classList.add('fa-solid');
        removeTaskBtn.classList.add('fa-xmark');

        leftSide.appendChild(taskCheck);
        leftSide.appendChild(taskName);
        leftSide.classList.add('left-side');

        rightSide.appendChild(taskDate);
        rightSide.appendChild(removeTaskBtn);
        rightSide.classList.add('right-side');

        currentTask.appendChild(leftSide);
        currentTask.appendChild(rightSide);

        currentTask.classList.add('task');

        tasks.style.display = 'flex';

        listOfTasks.style.display = 'flex';
        listOfTasks.style.flexDirection = 'column';

        listOfTasks.appendChild(currentTask);

        taskCheck.addEventListener('click', (e) => {
            e.currentTarget.parentNode.style.opacity = '0.6'
            taskDate.style.opacity = '0.6'
            e.currentTarget.style.background = 'green'
            e.currentTarget.style.borderRadius = '50%'
        })

        removeTaskBtn.addEventListener('click', () => {
            listOfTasks.removeChild(currentTask);
            saveToLocalStorage()
        })

        const setDate = document.createElement('div');

        const todayDate = document.createElement('h3');
        todayDate.textContent = 'Today'

        const tomorrowDate = document.createElement('h3');
        tomorrowDate.textContent = 'Tomorrow';

        const nextWeekDate = document.createElement('h3');
        nextWeekDate.textContent = 'Next week'

        const noDueDate = document.createElement('h3');
        noDueDate.textContent = 'No due date';

        setDate.appendChild(todayDate);
        setDate.appendChild(tomorrowDate);
        setDate.appendChild(nextWeekDate);
        setDate.appendChild(noDueDate);

        readTaskInput(taskName.textContent);

        taskDate.addEventListener('click', (e) => {

            rightSide.appendChild(setDate);

            setDate.classList.add('set-date')

            rightSide.style.flexDirection = 'column'

            todayDate.addEventListener('click', () => {
                taskDate.textContent = 'Today'
                setDate.style.display = 'none'
                rightSide.style.flexDirection = 'column-reverse'
                taskDate.style.pointerEvents = 'none'
            })

            tomorrowDate.addEventListener('click', () => {
                taskDate.textContent = 'Tomorrow'
                setDate.style.display = 'none'
                rightSide.style.flexDirection = 'column-reverse'
                taskDate.style.pointerEvents = 'none'
            })

            nextWeekDate.addEventListener('click', () => {
                taskDate.textContent = 'Next week'
                setDate.style.display = 'none'
                rightSide.style.flexDirection = 'column-reverse'
                taskDate.style.pointerEvents = 'none'
            })

            noDueDate.addEventListener('click', () => {
                taskDate.textContent = 'No due date'
                setDate.style.display = 'none'
                rightSide.style.flexDirection = 'column-reverse'
                taskDate.style.pointerEvents = 'none'
            })

        })


    }

    function hideTaskForm(){
        addTask.style.display = 'flex'
        addTaskPopup.style.display = 'none'
        addTaskPopup.value = ''
        addCancelTaskButtons.style.display = 'none'
        taskList.style.display = 'flex'
    }
    
    addTaskButton.addEventListener('click', displayTask)
    addTaskButton.addEventListener('click', hideTaskForm);


}




export default Interface