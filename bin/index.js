#!/usr/bin/env node

const dbType = require('../dist');

dbType
  .main()
  .then(() => console.log('DB Type generated'))
  .catch(() => console.log('Fail to generate DB Type'));
