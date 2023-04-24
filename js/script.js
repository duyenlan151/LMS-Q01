let isOpen = true;

window.addEventListener("DOMContentLoaded", (event) => {
  // console.log("DOM fully loaded and parsed");
  findButtonSidebar();
});

function findButtonSidebar() {
  const buttonSibar = document.querySelector('.button-sidebar');
  buttonSibar && buttonSibar.addEventListener('click', toggleSidebar);

  const width = document.body.clientWidth;
  if (width <= 768) {
    toggleSidebar();
  }
}

function toggleSidebar() {
  const sidebarWrapper = document.querySelector('.sidebar-wrapper');
  sidebarWrapper && sidebarWrapper.classList.toggle('sidebar-wrapper--hide');

  const contentWrapper = document.querySelector('.content-wrapper');
  contentWrapper && contentWrapper.classList.toggle('content-wrapper--open');
}