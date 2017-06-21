const {createWebview} = require('./webview');

let webviewsCounter = 0;
let selectedWebviewIndex;

function handleTabBarButtonClick(event) {
  selectedWebviewIndex = parseInt(event.target.innerHTML, 10);
  updateWebviews();
}

function updateList() {
  const list = document.querySelector('.tabbar-account-list');

  list.innerHTML = '';

  for (view of new Array(webviewsCounter).keys()) {
    const button = document.createElement('div');
    button.className = 'tabbar-button';
    button.innerHTML = view;
    button.addEventListener('click', handleTabBarButtonClick);
    list.appendChild(button);
  }
}

function updateWebviews() {
  const webviews = document.querySelectorAll('webview');
  Array.from(webviews).forEach((view, index) => {
    view.style.display = index === selectedWebviewIndex ? '' : 'none'; // TODO: use hide class
  });
}

function addDragRegion() {
  if (process.platform === 'darwin') {
    // add titlebar ghost to prevent interactions with the content while dragging
    const titleBar = document.createElement('div');
    titleBar.className = 'drag-region';
    document.body.appendChild(titleBar);
  }
}

document.querySelector('.tabbar-account-add').onclick = () => {
  const webview = createWebview(webviewsCounter);
  const content = document.getElementById('content');
  content.appendChild(webview);

  selectedWebviewIndex = webviewsCounter;
  webviewsCounter++;

  updateList();
  updateWebviews();
};

document.addEventListener('DOMContentLoaded', (event) => {
  addDragRegion()
})
