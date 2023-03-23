<h1 align="center">
  Sequelize DB Type
</h1>

<p align="center">
  Sequelize model type definitions generator for Node Js Developer who use Sequelize + TypeScript
</p>

<p align="center">
  Get started with `Sequelize DB Type` by running 
  <br \>
  <code>npm i -D sequelize-db-type</code>
  <br \>
  or with yarn
  <br \>
  <code>yarn add -D sequelize-db-type</code>
</p>

<div align="center">

[![PRs-Welcome][contribute-image]][contribute-url] [![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

</div>

[downloads-image]: https://img.shields.io/npm/dm/sequelize-db-type?color=364fc7&logoColor=364fc7
[npm-url]: https://www.npmjs.com/package/sequelize-db-type
[npm-image]: https://img.shields.io/npm/v/sequelize-db-type?color=0b7285&logoColor=0b7285
[contribute-url]: https://github.com/krsbx/sequelize-db-type/blob/main/CONTRIBUTING.md
[contribute-image]: https://img.shields.io/badge/PRs-welcome-blue.svg

## Table of contents

- <a href="#about">What is Sequelize DB Type?</a>
- <a href="#getting-started">Getting Started</a>
- <a href="#contributors">Contributors</a>

<h2 id="about">What is Sequelize DB Type?</h2>

"_Sequelize DB Type_" is a model typedefinitions for the people who use TypeScript as their language when developing backend with Sequelize ORM.

**Keep in mind** that the generated file is can be edited. Just **keep in mind** the generated file will be overwritten every time you run a sequelize migration.

<h2 id="getting-started">Getting Started</h2>

1. To get started with `sequelize-db-type`, run any of the following commands:

### npm

```bash
npm i -D sequelize-db-type@latest
```

2. Add your model folder path to your `package.json` in `sequelize-db-type`

```diff
# Rest of your `package.json`
+ sequelize-db-type: "your-model-folder-path"
}
```

3. Add a `prepare` scripts in your `package.json`

```diff
  "scripts":{
+   "prepare": "patch-package",
  }
```

4. Run the prepare scripts to patch `sequelize-cli` so it will run `sequelize-db-type` automatically

```bash
# With NPM
yarn run prepare

# With Yarn
yarn run prepare
```

5. Run a sequelize migrations

```bash
# With NPM
npx sequelize-cli db:migrate

# With Yarn
yarn sequelize-cli db:migrate
```

6. Add `sequelize-db-type` in your `models/index.ts`

```diff
# Import `sequelize-db-type`
+ import { Database } from 'sequelize-db-type/helper';

# Change db from an object to Database
- let db = {}
+ const db: Database = {} as Database;
```

7. Add `sequelize-db-type` in all of your model in `models` folder

```diff
# Import `sequelize-db-type`
+ import { Database } from 'sequelize-db-type/helper';

# Change `static associate` parameter type
- static associate(models) {
-   define association here
- }
+ static associate(models: Database) {
+   define association here
+ }
```

8. Use generated models in your code (e.g. `index.ts`)

```ts
// Import the models from 'models' folder
import db from './models';

db.sequelize.drop(); // Should have a type definition now

// Should have a type definition with the correct paramter to pass through
db.users.create({
  ...payload,
});
```

<h2 id="contributors">Contributors</h2>

We 💖 contributors! Feel free to contribute to this project but **please read the [Contributing Guidelines](CONTRIBUTING.md) before opening an issue or PR** so you understand the branching strategy and local development environment.
