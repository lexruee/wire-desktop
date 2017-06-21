const electron = require('electron');
const path = require('path');
const fs = require('fs');

class JSONStore {
  constructor(file, defaults) {
    const userDataPath = (electron.app || electron.remote.app).getPath('userData');
    this.path = path.join(userDataPath, file + '.json');
    this.data = parseDataFile(this.path, defaults);
  }

  get(key) {
    return this.data[key];
  }

  set(key, val) {
    this.data[key] = val;
    persistDataFile(this.path, this.data);
  }

  delete(key) {
    delete this.data[key];
    persistDataFile(this.path, this.data);
  }
}

function persistDataFile(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data));
  } catch(error) {
    throw new Error('Failed to persist data: ', error.message);
  }
}

function parseDataFile(filePath, defaults) {
  try {
    return JSON.parse(fs.readFileSync(filePath));
  } catch(error) {
    return defaults;
  }
}

module.exports = JSONStore;
