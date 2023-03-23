const appRootPath = require('app-root-path');
const path = require('path');
const fs = require('fs-extra');
const { PATCH_NAME, PATCH_PATH } = require('./constant');

exports.patch = async function patch() {
  const rootPath = appRootPath.path;
  const patchDest = path.join(rootPath, 'patches');

  if (!fs.existsSync(patchDest)) fs.mkdirpSync(patchDest);

  return fs.copyFile(PATCH_PATH, path.join(patchDest, PATCH_NAME));
};

this.patch();
