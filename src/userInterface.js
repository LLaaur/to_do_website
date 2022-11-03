function Interface() {

    const checkbox = document.getElementById('darkmode-toggle');
    const nav = document.querySelector('.navbar');

    const sideMenu = document.querySelector('.side-menu');

    const rightPanel = document.querySelector('.right-panel');
    const rightPanelTask = document.querySelector('.current-task');

    const menuBtn = document.querySelector('.menu-button');

    const addProjectBtn = document.querySelector('.add-project');
    const projectNameInput = document.getElementById('add-project-popup');

    const addCancelProject = document.querySelector('.add-or-cancel-buttons');

    const cancelProjectBtn = document.querySelector('.cancel-project-button');

    const createProjectBtn = document.querySelector('.add-project-button');


    const projectsList = document.querySelector('.projects-list');

    const taskList = document.querySelector('.task-list');

    const addTask = document.querySelector('.add-task');

    const addTaskPopup = document.getElementById('add-task-popup');

    const addCancelTaskButtons = document.querySelector('.add-or-cancel-task-buttons')

    const cancelTaskButton = document.querySelector('.cancel-task-button');

    const addTaskButton = document.querySelector('.add-task-button');

    checkbox.addEventListener('input', () => {
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


    menuBtn.addEventListener('click', () => {
        sideMenu.classList.toggle('minimize');
        rightPanel.style.width = '100%';
    })

    addProjectBtn.addEventListener('click', () => {
        projectNameInput.style.display = 'block';
        projectNameInput.value = '';
        addCancelProject.style.display = 'flex';
    })

    cancelProjectBtn.addEventListener('click', () => {
        projectNameInput.style.display = 'none';
        addCancelProject.style.display = 'none';
        
    })

    function clearForm(){
        projectNameInput.value = '';
        projectNameInput.style.display = 'none';
        addCancelProject.style.display = 'none';
    }


    createProjectBtn.addEventListener('click', () => {
        
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

    addTask.addEventListener('click', () => {
        addTaskPopup.style.display = 'block'
        addTaskPopup.value = ''
        addTask.style.display = 'none'
        addCancelTaskButtons.style.display = 'flex';
    })

    cancelTaskButton.addEventListener('click', () => {
        addTaskPopup.style.display = 'none';
        addCancelTaskButtons.style.display = 'none';
        addTask.style.display = 'flex'
    })

    addTaskButton.addEventListener('click', () => {

        taskList.style.display = 'flex';

        const task = document.createElement('div');

        task.innerHTML += ` <div class="task">

                                    <div class="left-side">

                                        <i class="fa-regular fa-circle" id="circle"></i>

                                        <h3>${addTaskPopup.value}</h3>

                                    </div>

                                <div class="right-side">No date</div>

                            </div>`

        taskList.appendChild(task);
        
    })

}

export default Interface;
