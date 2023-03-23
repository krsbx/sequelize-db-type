import appRootPath from 'app-root-path';
import path from 'path';
import fs from 'fs-extra';
import { PATCH_NAME, PATCH_PATH } from './utils/constant';

export async function patch() {
  const rootPath = appRootPath.path;
  const patchDest = path.join(rootPath, 'patches');

  if (!fs.existsSync(patchDest)) fs.mkdirpSync(patchDest);

  return fs.copyFile(PATCH_PATH, path.join(patchDest, PATCH_NAME));
}

patch();
