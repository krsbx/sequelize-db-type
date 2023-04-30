import { Model, ModelStatic, Sequelize } from 'sequelize';
<% modelsName.forEach(({ name, path }) => { %>
import <%= name %> from '<%= path %>';
<% }) %>

export type ModelBase<T> = Record<string, ModelStatic<Model<unknown, unknown>>>;

export type Models<T> = ModelBase<T> & {
<% modelsName.forEach(({ fileName, name}) => { %>
  '<%= fileName %>': ReturnType<typeof <%= name %>>;
<% }) %>
};

export type Database = Models<unknown> & {
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
};
