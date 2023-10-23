import { Col, Tag } from "antd";
import { useState } from "react";
import { PredefinedQueries, Query } from "../types/queries";

const CheckableTags = ({
  predefinedQueries,
}: {
  predefinedQueries: PredefinedQueries;
}) => {
  const [selectedTag, setSelectedTag] = useState<Query>(predefinedQueries[0]);

  const handleChange = (query: string) => {
    setSelectedTag(query);
  };
  return (
    <>
      {predefinedQueries.map((query: Query, index: number) => (
        <Col span={7} key={`tag-key-${index}`}>
          <Tag.CheckableTag
            checked={selectedTag === query}
            onChange={() => handleChange(query)}
          >
            {query}
          </Tag.CheckableTag>
        </Col>
      ))}
    </>
  );
};

export default CheckableTags;
