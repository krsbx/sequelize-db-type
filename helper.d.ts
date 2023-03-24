import { Model, Sequelize } from 'sequelize';

export type ModelBase<T> = Record<
  string,
  Model<unknown, unknown> & {
    associate?: (db: T) => void;
  }
>;

export type Models<T> = ModelBase<T>;

export type Database = Models<unknown> & {
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
};
