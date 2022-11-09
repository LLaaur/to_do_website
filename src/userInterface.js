import { format, parse, parseISO, set } from "date-fns";

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

    const rightPanelTask = document.querySelector('.current-task');

    const addTask = document.querySelector('.add-task');

    const task = document.createElement('div');

    const inbox = document.querySelector('.inbox');
    const today = document.querySelector('.today');
    const tomorrow = document.querySelector('.tomorrow');
    const nextWeek = document.querySelector('.this-week');

    inbox.addEventListener('click', () => {
        rightPanelTask.textContent = inbox.textContent
        addTask.style.display = 'flex';
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

    // display text field on add task click

    const addProjectBtn = document.querySelector('.add-project');
    const addCancelProject = document.querySelector('.add-or-cancel-buttons');
    const projectNameInput = document.getElementById('add-project-popup');

    addProjectBtn.addEventListener('click', () => {
        projectNameInput.style.display = 'block';
        projectNameInput.value = '';
        addCancelProject.style.display = 'flex';
    })

    const cancelProjectBtn = document.querySelector('.cancel-project-button');
    cancelProjectBtn.addEventListener('click', () => {
        projectNameInput.style.display = 'none';
        addCancelProject.style.display = 'none';
        
    })

    // clear the value inserted in the add project text field
    function clearForm(){
        projectNameInput.value = '';
        projectNameInput.style.display = 'none';
        addCancelProject.style.display = 'none';
    }


    // create project on add project click, display the name of the project in the right panel
    const taskList = document.querySelector('.task-list');
    const createProjectBtn = document.querySelector('.add-project-button');

    createProjectBtn.addEventListener('click', () => {

        const projectsList = document.querySelector('.projects-list');
        
        const removeProjectBtn = document.createElement('i');
        removeProjectBtn.classList.add('fa-solid');
        removeProjectBtn.classList.add('fa-xmark');
        
        projectsList.style.display = 'flex';

        const project = document.createElement('div');
        project.classList.add('project');

        project.innerHTML += `<i class="fa-solid fa-check-double"></i>` ;

        const projectName = document.createElement('h3');

        if (projectNameInput.value == ''){
            alert('Projects must have a name');
            return
        }
        else{
            projectName.textContent = projectNameInput.value;
        }

        project.appendChild(projectName);

        project.appendChild(removeProjectBtn);

        projectsList.appendChild(project);

        clearForm();

        removeProjectBtn.addEventListener('click', (e) => {
            projectsList.removeChild(e.currentTarget.parentNode);
            project.textContent = '';
        })


        project.addEventListener('click', (e) => {
            rightPanelTask.textContent = e.currentTarget.textContent;
            taskList.style.display = 'flex';
        })

    })


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


    addTaskButton.addEventListener('click', () => {


        const currentTask = document.createElement('div');

        const leftSide = document.createElement('div');

        const taskCheck = document.createElement('i');
        taskCheck.classList.add('fa-regular');
        taskCheck.classList.add('fa-circle');

        const taskName = document.createElement('h3');
        if (addTaskPopup.value == ''){
            alert('Tasks must have a name')
            return
        }
        else{
            taskName.textContent = addTaskPopup.value
        }

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

        tasks.appendChild(currentTask);


        taskCheck.addEventListener('click', (e) => {
            e.currentTarget.parentNode.style.opacity = '0.6'
            taskDate.style.opacity = '0.6'
            e.currentTarget.style.background = 'green'
            e.currentTarget.style.borderRadius = '50%'
        })

        removeTaskBtn.addEventListener('click', () => {
            tasks.removeChild(currentTask);
        })

        const setDate = document.createElement('input');
        setDate.setAttribute('type', 'date');

        taskDate.addEventListener('click', () => {

            rightSide.appendChild(setDate);

            taskDate.style.display = 'none'

            setDate.classList.add('set-date')

            rightSide.style.flexDirection = 'column'
        })

    })

}

export default Interface;
