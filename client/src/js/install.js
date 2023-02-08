const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  butInstall.style.visibility = 'visible';
});

butInstall.addEventListener('click', (event) => {
  event.prompt();
  butInstall.setAttribute('disabled', true);
  butInstall.textContent = 'Installed!';
});

window.addEventListener('appinstalled', (event) => {
  butInstall.textContent = 'Successfully installed!';
  console.log('👍', 'appinstalled', event);
});
