import { DataSource } from "../types/datasources";

export type GlobalStateProps = {
  datasource: DataSource;
};

export const intialState: GlobalStateProps = {
  datasource: undefined as any,
};
