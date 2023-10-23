import { DataSource } from "../types/datasources";
import { Query, PredefinedQueries } from "../types/queries";

export type GlobalStateProps = {
  query: Query;
  predefinedQueries: PredefinedQueries;
  datasource: DataSource;
};

export const intialState: GlobalStateProps = {
  query: "SELECT * FROM Customers;",
  predefinedQueries: [
    "SELECT * FROM Customers;",
    "SELECT contactName, contactTitle FROM Customers;",
  ],
  datasource: undefined as any,
};
