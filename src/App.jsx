import { useState } from "react";
import "./App.css";
import {
  Flex,
  Stack,
  Card,
  CardHeader,
  CardBody,
  Text,
  Spacer,
  Button,
  Heading,
} from "@chakra-ui/react";
import { loadNotes } from "../utils";
import NoteComponent from "./NoteComponent";

function App() {
  const [notes, updateNotes] = useState(loadNotes() || []);

  if (notes.length === 0) {
    return (
      <>
        <Flex>
          <Heading> Notes App </Heading>
          <Spacer />
          <Button colorScheme="teal" variant="outline">
            Add Note
          </Button>
        </Flex>
        <div className="hrs"></div>
        <div className="hrs"></div>
        <Heading> No Notes Found</Heading>
      </>
    );
  }

  return (
    <>
      <div id="notes">
        <Flex>
          <Heading> Notes App </Heading>
          <Spacer />
          <Button colorScheme="teal" variant="outline">
            Add Note
          </Button>
        </Flex>
        <Stack spacing="4">
          <NoteComponent title={"HEY!"} content={"TESTING"} />
        </Stack>
      </div>
    </>
  );
}

export default App;
