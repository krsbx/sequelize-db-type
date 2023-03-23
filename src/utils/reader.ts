import type { JsonValue, PackageJson } from 'type-fest';
import fs from 'fs-extra';
import appRootPath from 'app-root-path';
import path from 'path';

export const getModelPath = () => {
  const pkgJson: PackageJson = require(path.resolve(
    appRootPath.path,
    'package.json'
  ));

  const modelsPath = pkgJson['sequelize-db-type'];

  return modelsPath;
};

export const getModelFileNames = async (modelsPath: JsonValue) => {
  if (typeof modelsPath !== 'string') {
    console.log('Model path is not in valid format, stopping...');
    return;
  }

  const fileNames = await fs.readdir(
    path.resolve(appRootPath.path, modelsPath)
  );

  const filteredFileNames = fileNames
    .filter(
      (name) =>
        !['index.ts', 'index.js'].includes(name) &&
        name.indexOf('.') !== 0 &&
        name.indexOf('.test.js') === -1 &&
        name.indexOf('.d.ts') === -1 &&
        name.indexOf('.test.ts') === -1
    )
    .map((val) => {
      const vals = val.split('.');

      // Remove extensions
      vals.pop();

      return vals.join('.');
    });

  return filteredFileNames;
};
