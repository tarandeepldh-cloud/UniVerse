// auth.js
// Simple username-only login stored in localStorage

(function(){
  function getUser(){ return localStorage.getItem('campus360_user') || null; }

  // index.html login logic
  const enterBtn = document.getElementById('enterBtn');
  const demoBtn = document.getElementById('demoBtn');
  const usernameInput = document.getElementById('username');

  if(enterBtn){
    enterBtn.addEventListener('click', () => {
      const name = (usernameInput.value || '').trim();
      if(!name){ alert('Enter a name to proceed'); return; }
      localStorage.setItem('campus360_user', name);
      window.location.href = 'dashboard.html';
    });
  }

  if(demoBtn){
    demoBtn.addEventListener('click', () => {
      localStorage.setItem('campus360_user', 'Demo Student');
      window.location.href = 'dashboard.html';
    });
  }

  // pages other than login, show user and handle logout
  const welcome = document.getElementById('welcomeName');
  const logout = document.getElementById('logout');
  if(welcome){
    const user = getUser();
    if(!user){ window.location.href = 'index.html'; return; }
    welcome.innerText = user;
  }
  if(logout){
    logout.addEventListener('click', () => {
      localStorage.removeItem('campus360_user');
      window.location.href = 'index.html';
    });
  }

})();
