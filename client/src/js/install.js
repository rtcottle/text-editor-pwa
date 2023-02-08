const butInstall = document.getElementById('buttonInstall');
let deferredPrompt;

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  butInstall.style.visibility = 'visible';
});

butInstall.addEventListener('click', (event) => {
  deferredPrompt.prompt();
  butInstall.setAttribute('disabled', true);
  butInstall.textContent = 'Installed!';
  deferredPrompt = null;
});

window.addEventListener('appinstalled', (event) => {
  butInstall.textContent = 'Successfully installed!';
  console.log('appinstalled!', event);
});
