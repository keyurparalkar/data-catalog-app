export type Data = any[];

type EventDescriptor = {
  description: string;
  author: string;
  timestamp: string;
};

export type MetaData = {
  latestComment: EventDescriptor;
  rowCount: number;
  columnCount: number;
  size: number;
  description: string;
  owners: string[];
  categories: string[];
  verified?: EventDescriptor;
};

export type DataSource = {
  data: Data;
  meta: MetaData;
};

export type AllDataSources = DataSource[];
