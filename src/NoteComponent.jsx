import React from "react";

function NoteComponent({ title, content }) {
  return (
    <>
      <Card key={size} size={size}>
        <CardHeader>
          <Heading size="md"> {title}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{content}</Text>
        </CardBody>
      </Card>
    </>
  );
}

export default NoteComponent;
