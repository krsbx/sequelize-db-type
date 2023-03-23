import { Model, Sequelize } from 'sequelize';
{{ #modelsName }}
import {{ key }} from '{{ value }}';
{{ /modelsName }}

export type ModelBase<T> = Record<
  string,
  Model & {
    associate?: (db: T) => void;
  }
>;

export type Models<T> = ModelBase<T> & {
{{ #modelsName }}
  {{ key }}: ReturnType<typeof {{ key }}>;
{{ /modelsName }}
};

export type Database = Models<unknown> & {
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
};
