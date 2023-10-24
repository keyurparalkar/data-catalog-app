import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Button, Card, Empty, Input } from "antd";
import rehypeStringify from "rehype-stringify";
import Markdown from "react-markdown";
import { EditOutlined } from "@ant-design/icons";

import { DataContext } from "../../store/providers";
import { replaceNewLineChar } from "./utils";

const Readme = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { datasources, selectedTable } = useContext(DataContext);
  const currentDataSource = datasources[selectedTable];

  const [text, setText] = useState("");

  const onEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {
    const transformedText = replaceNewLineChar(
      currentDataSource?.meta?.documentation || ""
    );
    setText(transformedText);
  }, [currentDataSource?.meta?.documentation]);

  if (text === "") return <Empty />;

  return (
    <Card
      headStyle={{
        display: "inline-block",
        float: "right",
        borderBottom: "0px",
        padding: 10,
      }}
      extra={
        <>
          {isEditing ? (
            <Button onClick={onEditClick} type="default">
              Done
            </Button>
          ) : (
            <Button
              type="text"
              onClick={onEditClick}
              icon={<EditOutlined key="edit" />}
            />
          )}
        </>
      }
    >
      {isEditing ? (
        <Input.TextArea rows={25} value={text} onChange={handleChange} />
      ) : (
        <Markdown rehypePlugins={[rehypeStringify]}>{text}</Markdown>
      )}
    </Card>
  );
};

export default Readme;
