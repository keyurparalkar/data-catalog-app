export type Data = any[];

type DataSourceName = string;

type EventDescriptor = {
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
};

export type DataSource = {
  name: DataSourceName;
  data: Data;
  meta: MetaData;
};
