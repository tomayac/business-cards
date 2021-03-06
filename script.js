const link = document.querySelector('.twitter-link');
const reset = document.querySelector('.reset-card');
const img = document.querySelector('.avatar');
const icon = document.querySelector('link[rel=icon]');
const name = document.querySelector('.name');
const role = document.querySelector('.role');

link.addEventListener('input', () => {
  link.href = `https://twitter.com/${link.textContent.replace('@', '')}`;
});

reset.addEventListener('click', async () => {
  img.src = './avatar.png';
  icon.href = './avatar.png';
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

if ('showOpenFilePicker' in window) {
  import('./open.js');
}

if ('clipboard' in navigator && 'write' in navigator.clipboard && 'showSaveFilePicker' in window) {
  import('./copy-image.js');
}

if ('showSaveFilePicker' in window) {
  import('./save.js');
}

if ('getAsFileSystemHandle' in DataTransferItem.prototype) {
  import('./drag.js');
}

if ('clipboardData' in ClipboardEvent.prototype && 'showSaveFilePicker' in window) {
  import('./paste.js');
}

if ('launchQueue' in window) {
  import('./file.js');
}
