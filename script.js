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
    './avatar.png';
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

if ('clipboard' in navigator && 'write' in navigator.clipboard && 'showSaveFilePicker' in window) {
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
