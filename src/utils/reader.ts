import type { JsonValue, JsonObject, PackageJson } from 'type-fest';
import fs from 'fs-extra';
import appRootPath from 'app-root-path';
import path from 'path';

export const getPackageJson = () =>
  require(path.resolve(appRootPath.path, 'package.json')) as PackageJson;

export const getConfigs = () => {
  const pkgJson = getPackageJson();

  const userConfig = pkgJson['sequelize-db-type'];

  return userConfig as JsonObject;
};

export const getModelPath = () => {
  const config = getConfigs();

  if (!config) return;

  return (config?.models ?? '') as string;
};

export const getMigrationPath = () => {
  const config = getConfigs();

  if (!config) return;

  return (config?.migrations ?? '') as string;
};

export const getSeederPath = () => {
  const config = getConfigs();

  if (!config) return;

  return (config?.seeders ?? '') as string;
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
