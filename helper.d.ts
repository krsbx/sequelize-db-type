import { Model, ModelStatic, Sequelize } from 'sequelize';

export type ModelBase<T> = Record<string, ModelStatic<Model<unknown, unknown>>>;

export type Models<T> = ModelBase<T>;

export type Database = Models<unknown> & {
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
};
