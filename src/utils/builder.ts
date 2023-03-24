import fs from 'fs-extra';
import path from 'path';
import appRootPath from 'app-root-path';
import type { PackageJson } from 'type-fest';
import template from 'lodash.template';
import snakeCase from 'lodash.snakecase';
import { HELPER_TEMPLATE } from './constant';

const pkgJson: PackageJson = require('../../package.json');

export const generateTemplateFormat = (
  modelsPath: string,
  fileNames: string[]
) =>
  fileNames.reduce((prev, curr) => {
    prev.push({
      name: snakeCase(curr),
      fileName: curr,
      path: path.relative(
        path.join(appRootPath.path, 'node_modules', pkgJson.name as string),
        path.join(appRootPath.path, modelsPath, curr)
      ),
    });

    return prev;
  }, [] as Record<string, string>[]);

export const renderTemplate = (
  modelsName: ReturnType<typeof generateTemplateFormat>
) =>
  template(HELPER_TEMPLATE)({
    modelsName,
  });

export const saveTemplateFile = async (writePath: string, content: string) => {
  if (!fs.existsSync(path.resolve(writePath, '..')))
    fs.mkdirSync(path.resolve(writePath, '..'), {
      recursive: true,
    });

  fs.writeFileSync(writePath, content);
};
