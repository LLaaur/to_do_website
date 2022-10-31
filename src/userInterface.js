function Interface() {

    const checkbox = document.getElementById('darkmode-toggle');
    const nav = document.querySelector('.navbar');
    const sideMenu = document.querySelector('.side-menu');
    const rightPanel = document.querySelector('.right-panel');

    const menuBtn = document.querySelector('.menu-button');

    const addProjectBtn = document.querySelector('.add-project');
    const addProjectpopup = document.getElementById('add-project-popup');

    const addCancelProject = document.querySelector('.add-or-cancel-buttons');

    const cancelProjectBtn = document.querySelector('.cancel-project-button');

    const createProjectBtn = document.querySelector('.add-project-button');

    const projectsList = document.querySelector('.projects-list');
    // const project = document.querySelector('.project');

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
        addProjectpopup.style.display = 'block';
        addProjectpopup.value = '';
        addCancelProject.style.display = 'flex';
    })

    cancelProjectBtn.addEventListener('click', () => {
        addProjectpopup.style.display = 'none';
        addCancelProject.style.display = 'none';
    })

    function clearForm(){
        addProjectpopup.value = '';
    }


    createProjectBtn.addEventListener('click', () => {

        projectsList.style.display = 'flex';

        const project = document.createElement('div');
        project.classList.add('project');

        project.innerHTML += `<i class="fa-sharp fa-solid fa-check"></i>` ;

        const projectName = document.createElement('h3');

        projectName.textContent = addProjectpopup.value;

        project.appendChild(projectName);


        projectsList.appendChild(project);

        clearForm();

    })

}

export default Interface;