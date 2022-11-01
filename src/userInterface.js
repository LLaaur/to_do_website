function Interface() {

    const checkbox = document.getElementById('darkmode-toggle');
    const nav = document.querySelector('.navbar');
    const sideMenu = document.querySelector('.side-menu');
    const rightPanel = document.querySelector('.right-panel');

    const menuBtn = document.querySelector('.menu-button');

    const addProjectBtn = document.querySelector('.add-project');
    const projectNameInput = document.getElementById('add-project-popup');

    const addCancelProject = document.querySelector('.add-or-cancel-buttons');

    const cancelProjectBtn = document.querySelector('.cancel-project-button');

    const createProjectBtn = document.querySelector('.add-project-button');


    const projectsList = document.querySelector('.projects-list');


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


        removeProjectBtn.addEventListener('click', (e) => {
            projectsList.removeChild(e.currentTarget.parentNode);
        })


        clearForm();

        const rightPanelTask = document.querySelector('.current-task');
        
        project.addEventListener('click', (e) => {
            rightPanelTask.textContent = e.currentTarget.textContent;
        })

    })

}

export default Interface;