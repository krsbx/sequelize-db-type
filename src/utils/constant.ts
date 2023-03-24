import fs from 'fs-extra';
import path from 'path';

export const PKG_ROOT = path.join(__dirname, '../../');

export const TEMPLATE_DIR_PATH = path.join(PKG_ROOT, 'template');

export const HELPER_TEMPLATE_PATH = path.join(TEMPLATE_DIR_PATH, 'helper.d.ts');

export const HELPER_TEMPLATE = fs.readFileSync(HELPER_TEMPLATE_PATH, 'utf8');
