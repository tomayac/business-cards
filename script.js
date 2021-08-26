const link = document.querySelector('.twitter-link');
const reset = document.querySelector('.reset-card');
const img = document.querySelector('.avatar');
const name = document.querySelector('.name');
const role = document.querySelector('.role');

link.addEventListener('input', () => {
  link.href = `https://twitter.com/${link.textContent.replace('@', '')}`;
});

reset.addEventListener('click', async () => {
  img.src =
    'https://cdn.glitch.com/9550a029-cbe2-4e54-bba1-0bd6b35b3c89%2Fdda943b2-2206-45c7-8765-b8c0d2464edd-large.png?v=1629884729569';
  name.textContent = 'Thomas Steiner';
  role.textContent = 'Developer Relations Engineer at Google.';
  link.textContent = '@tomayac';
  link.href = 'https://twitter.com/tomayac';  
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    await navigator.serviceWorker.register('./sw.js');
  });
}

if ('clipboard' in navigator && 'writeText' in navigator.clipboard) {
  import('./copy-text.js');
}

if ('clipboard' in navigator && 'write' in navigator.clipboard) {
  import('./copy-image.js');
}

if ('showSaveFilePicker' in window) {
  import('./save.js');
}

if ('showOpenFilePicker' in window) {
  import('./open.js');
}

if ('getAsFileSystemHandle' in DataTransferItem.prototype) {
  import('./drag.js');
}

if ('launchQueue' in window) {
  import('./file.js');
}

if ('clipboardData' in ClipboardEvent.prototype) {
  import('./paste.js');
}
