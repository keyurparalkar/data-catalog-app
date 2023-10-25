import { Col, ConfigProvider, Tag } from "antd";
import { PredefinedQueries, Query } from "../types/queries";

type CheckableTagsProps = {
  predefinedQueries: PredefinedQueries;
  onQueryChange: (query: string) => void;
  currentQuery: Query;
};

const CheckableTags = ({
  predefinedQueries,
  onQueryChange,
  currentQuery,
}: CheckableTagsProps) => {
  const handleChange = (query: string) => {
    onQueryChange(query);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Tag: {
            colorPrimary: "#0000FF",
            colorPrimaryHover: "#4545f8",
          },
        },
      }}
    >
      {predefinedQueries.map((query: Query, index: number) => (
        <Col span={7} key={`tag-key-${index}`}>
          <Tag.CheckableTag
            checked={currentQuery === query}
            onChange={() => handleChange(query)}
          >
            {query}
          </Tag.CheckableTag>
        </Col>
      ))}
    </ConfigProvider>
  );
};

export default CheckableTags;
