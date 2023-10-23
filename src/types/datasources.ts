import { PredefinedQueries, Query } from "./queries";

export type Data = any[];

type DataSourceName = string;

export type EventDescriptor = {
  description: string;
  author: string;
  timestamp: string;
};

export type MetaData = {
  comments: EventDescriptor[];
  rowCount: number;
  columnCount: number;
  size: number;
  description: string;
  owners: string[];
  categories: string[];
  verified?: EventDescriptor;
  fields: string[] | [];
  predefinedQueries: PredefinedQueries;
  queryColumnMap: Record<string, string[]>;
};

export type DataSource = {
  name: DataSourceName;
  data: Data;
  meta: MetaData;
};
