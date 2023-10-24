import { DataSource } from "../types/datasources";

type TableAccessor = DataSource["name"];

export type GlobalStateProps = {
  datasources: Record<TableAccessor, DataSource>;
  selectedTable: TableAccessor;
};

export const intialState: GlobalStateProps = {
  datasources: undefined as any,
  selectedTable: "customers",
};
