import { Button, Card, Input } from "antd";
import rehypeStringify from "rehype-stringify";

import Markdown from "react-markdown";
import { EditOutlined } from "@ant-design/icons";
import { ChangeEvent, useContext, useState } from "react";
import { DataContext } from "../../store/providers";
import { replaceNewLineChar } from "./utils";

const Notes = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { datasource } = useContext(DataContext);
  const transformedText = replaceNewLineChar(
    datasource?.meta?.documentation || ""
  );

  const [text, setText] = useState(transformedText);

  const onEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
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

export default Notes;
