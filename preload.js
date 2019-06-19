// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
var BOT = require('./productVersion');
window.addEventListener('DOMContentLoaded', () => {
  for (const versionType of ['chrome', 'electron', 'node']) {
    //document.getElementById(`${versionType}-version`).innerText = process.versions[versionType];
    
  }
})
