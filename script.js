document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.querySelector('.close');
  
    loginButton.addEventListener('click', () => {
      loginModal.style.display = 'flex';
    });
  
    closeModal.addEventListener('click', () => {
      loginModal.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target === loginModal) {
        loginModal.style.display = 'none';
      }
    });
  
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Login Successful');
      loginModal.style.display = 'none';
    });
  });
  