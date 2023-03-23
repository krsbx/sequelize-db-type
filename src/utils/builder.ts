import fs from 'fs-extra';
import path from 'path';
import appRootPath from 'app-root-path';
import * as templateFile from 'template-file';
import { HELPER_TEMPLATE_PATH } from './constant';

export const generateTemplateFormat = (
  modelsPath: string,
  fileNames: string[]
) =>
  fileNames.reduce((prev, curr) => {
    prev.push({
      key: curr,
      value: path.resolve(appRootPath.path, modelsPath, curr),
    });

    return prev;
  }, [] as Record<string, string>[]);

export const renderTemplate = (
  modelsName: ReturnType<typeof generateTemplateFormat>
) =>
  templateFile.renderFile(HELPER_TEMPLATE_PATH, {
    modelsName,
  });

export const saveTemplateFile = async (writePath: string, content: string) => {
  if (!fs.existsSync(path.dirname(writePath)))
    fs.mkdirSync(path.dirname(writePath), {
      recursive: true,
    });

  fs.writeFileSync(writePath, content);
};
