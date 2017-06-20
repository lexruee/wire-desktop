/*
 * Wire
 * Copyright (C) 2017 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

'use strict';

const {remote, ipcRenderer, webFrame, desktopCapturer} = require('electron');
const {app} = remote;

webFrame.setZoomLevelLimits(1, 1);
webFrame.registerURLSchemeAsBypassingCSP('file');

// https://github.com/electron/electron/issues/2984
const _setImmediate = setImmediate;
process.once('loaded', function() {
  global.setImmediate = _setImmediate;
  global.desktopCapturer = desktopCapturer;
  window.openGraph = require('../js/lib/openGraph');
});

///////////////////////////////////////////////////////////////////////////////
// Addressbook
///////////////////////////////////////////////////////////////////////////////
let cachedAddressBook;

function getAdressBook () {
  if (cachedAddressBook == undefined) {
    cachedAddressBook = require('node-addressbook');
  }
  return cachedAddressBook;
}

if (process.platform === 'darwin') {
  Object.defineProperty(window, 'wAddressBook', {get: getAdressBook});
}

