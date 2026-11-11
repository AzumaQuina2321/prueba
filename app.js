if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(() => console.log('Service Worker registrado'))
    .catch(err => console.error('Error al registrar SW', err));
}

// Instalacion manual de la PWA
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const btn = document.getElementById('btnInstall');
  btn.style.display = 'block';

  btn.addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      console.log('Resultado de la instalacion:', choiceResult.outcome);
      deferredPrompt = null;
      btn.style.display = 'none';
    });
  });
});