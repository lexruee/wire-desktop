module.exports = {
  createWebview(id) {
    const webview = document.createElement('webview');
    webview.src = "http://wire-webapp-dev.zinfra.io/";
    webview.partition = `persist:${id}`
    webview.style.display = 'none'
    webview.preload = './webview-preload.js'

    webview.addEventListener('will-navigate', function(event, url) {
      console.log(url)
    })

    webview.addEventListener('page-title-updated', function({title}) {
      console.log(title)
    })

    return webview;
  }
}
