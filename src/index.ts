import appRootPath from 'app-root-path';
import path from 'path';
import type { PackageJson } from 'type-fest';

import { getModelFileNames, getModelPath } from './utils/reader';
import {
  generateTemplateFormat,
  renderTemplate,
  saveTemplateFile,
} from './utils/builder';

const pkgJson: PackageJson = require('../package.json');

export async function main() {
  const modelsPath = getModelPath();

  if (!modelsPath) {
    console.log('Model path not defined, stoping...');
    return;
  }

  const fileNames = await getModelFileNames(modelsPath as string);

  if (!fileNames) return;

  const modelsName = await generateTemplateFormat(
    modelsPath as string,
    fileNames
  );

  if (!modelsName.length) {
    console.log('No model has been created yet, stopping...');
    return;
  }

  const content = await renderTemplate(modelsName);

  return saveTemplateFile(
    path.join(appRootPath.path, `node_modules/${pkgJson.name!}/helper.d.ts`),
    content
  );
}

main();
