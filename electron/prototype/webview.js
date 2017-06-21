const {shell, webContents} = require('electron');
const url = require('url');
const {openInExternalWindow} = require('../js/util');

module.exports = {
  createWebview(id) {
    console.log('createWebview', id)
    const webview = document.createElement('webview');
    webview.src = 'http://wire-webapp-dev.zinfra.io/';
    webview.partition = `persist:${id}`;
    webview.preload = './webview-preload.js';

    webview.addEventListener('new-window', (event) => {
      const protocol = url.parse(event.url).protocol;

      if (protocol === 'http:' || protocol === 'https:') {
        shell.openExternal(event.url);
      }
    })

    webview.addEventListener('will-navigate', (event, url) => {
      console.log('will-navigate', url);
    });

    webview.addEventListener('page-title-updated', ({title}) => {
      console.log('page-title-updated', title);
    });

    webview.addEventListener('dom-ready', () => {
      // webview.openDevTools();
    });

    return webview;
  }
}
