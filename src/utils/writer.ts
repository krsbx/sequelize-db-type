import path from 'path';
import appRootPath from 'app-root-path';
import { getMigrationPath, getModelPath, getSeederPath } from './reader';
import { saveTemplateFile } from './builder';

export function writer(
  fileName: string,
  content: string,
  type: 'migration' | 'seeder' | 'model'
) {
  let destPath: string | undefined = '';
  let errorMessage = '';

  switch (type) {
    case 'migration':
      destPath = getMigrationPath();
      errorMessage = 'Migration';
      break;

    case 'seeder':
      destPath = getSeederPath();
      errorMessage = 'Seeder';
      break;

    case 'model':
      destPath = getModelPath();
      errorMessage = 'Model';
      break;

    default:
      return;
  }

  if (!destPath) {
    console.log(`${errorMessage} path not defined, stoping...`);
    return;
  }

  destPath = path.join(appRootPath.path, destPath);
  const writePath = path.join(destPath, `${fileName.toLowerCase()}.ts`);

  return saveTemplateFile(writePath, content);
}
