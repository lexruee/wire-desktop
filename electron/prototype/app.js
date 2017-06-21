const {createWebview} = require('./webview');
const JSONStore = require('./account-store');

// init storage
let store = new JSONStore('accounts', {
  accounts: []
})

// load accounts
let accounts = store.get('accounts')

// set current account
let selectedWebviewIndex = accounts[0] && accounts[0].session

function addDragRegion() {
  if (process.platform === 'darwin') {
    // add titlebar ghost to prevent interactions with the content while dragging
    const titleBar = document.createElement('div');
    titleBar.className = 'drag-region';
    document.body.appendChild(titleBar);
  }
}

function handleTabBarButtonClick(event) {
  selectedWebviewIndex = event.target.session;
  updateWebviews();
  updateList();
}

function updateList() {
  const list = document.querySelector('.tabbar-account-list');

  list.innerHTML = '';

  for (account of accounts) {
    const button = document.createElement('div');
    button.className = 'tabbar-button';
    button.innerHTML = 'A';
    button.session = account.session;
    button.addEventListener('click', handleTabBarButtonClick);
    button.classList.toggle('tabbar-button-active', account.session === selectedWebviewIndex)
    list.appendChild(button);
  }
}

function initiateWebviews() {
  for (account of accounts) {
    console.log('initiateWebviews', account.session)
    addWebview(account.session)
  }
}

function addWebview(session) {
  console.log('addWebview', session)
  const webview = createWebview(session);
  const content = document.getElementById('content');
  content.appendChild(webview);
}

function updateWebviews() {
  [...document.querySelectorAll('webview')].forEach((view, index) => {
    const session = parseInt(view.partition.split(':')[1]);
    view.classList.toggle('hide', session !== selectedWebviewIndex)
  });
}

function addAccount() {
  let session = Date.now()
  const webview = createWebview(session);
  const content = document.getElementById('content');
  content.appendChild(webview);

  selectedWebviewIndex = session;

  let account = {
    session
  }

  accounts.push(account)
  store.set('accounts', accounts)

  updateList();
  updateWebviews();
}


document.addEventListener('DOMContentLoaded', (event) => {
  addDragRegion()

  // init listeners
  document.querySelector('.tabbar-account-add').addEventListener('click', addAccount);

  // render accounts
  updateList()
  initiateWebviews()
  updateWebviews()
})
