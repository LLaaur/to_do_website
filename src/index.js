const checkbox = document.getElementById('darkmode-toggle');
const nav = document.querySelector('.navbar');
const sideMenu = document.querySelector('.side-menu');
const rightPanel = document.querySelector('.right-panel');

checkbox.addEventListener('input', () => {
    if (checkbox.checked) {
        nav.style.backgroundColor = '#202025';
      nav.style.color = 'white';
      sideMenu.style.backgroundColor = '#2b2b2e';
      sideMenu.style.color = 'white';
      rightPanel.style.backgroundColor = '#1a1a1b';
      rightPanel.style.color = 'white';
    } else {
        nav.style.backgroundColor = '#FAF6F5';
        nav.style.color = 'black';
        sideMenu.style.backgroundColor = '#F7F8F3';
        sideMenu.style.color = 'black';
        rightPanel.style.backgroundColor = '#f8f3f0';
        rightPanel.style.color = 'black';
    }
  });