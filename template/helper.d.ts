import { Model, Sequelize } from 'sequelize';
<% modelsName.forEach(({ name, path }) => { %>
import <%= name %> from '<%= path %>';
<% }) %>

export type ModelBase<T> = Record<
  string,
  Model<unknown, unknown> & {
    associate?: (db: T) => void;
  }
>;

export type Models<T> = ModelBase<T> & {
<% modelsName.forEach(({ fileName, name}) => { %>
  '<%= fileName %>': ReturnType<typeof <%= name %>>;
<% }) %>
};

export type Database = Models<unknown> & {
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
};
