const path = require('path');

exports.PKG_ROOT = path.join(__dirname, '..');
exports.PATCH_DIR_PATH = path.join(this.PKG_ROOT, 'patches');
exports.PATCH_NAME = 'sequelize-cli+6.6.1.patch';
exports.PATCH_PATH = path.join(this.PATCH_DIR_PATH, this.PATCH_NAME);
