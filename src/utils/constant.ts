import path from 'path';

export const PKG_ROOT = path.join(__dirname, '../../');

export const TEMPLATE_DIR_PATH = path.join(PKG_ROOT, 'template');

export const HELPER_TEMPLATE_PATH = path.join(TEMPLATE_DIR_PATH, 'helper.d.ts');

export const PATCH_DIR_PATH = path.join(PKG_ROOT, 'patches');

export const PATCH_NAME = 'sequelize-cli+6.6.0.patch';

export const PATCH_PATH = path.join(PATCH_DIR_PATH, PATCH_NAME);
