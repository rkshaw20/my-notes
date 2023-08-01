import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { v4 as uuid } from "uuid";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote, updateNote } from "../features/Notes/noteSlice";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  isEdit?: boolean;
  note?: InputState;
}
interface InputState {
  _id: string;
  title: string;
  body: string;
  createdAt: string;
  priority: string;
  isPinned: boolean;
  timeStamp: number;
}


const NoteModal: React.FC<Props> = ({ isOpen, onClose,isEdit,note}) => {

  const dispatch=useDispatch();

  const date = new Date();

  const initialState: InputState ={
    _id: uuid(),
    title: "",
    body: "",
    createdAt: `${date.getDate()}/${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`,
    priority: "Low",
    isPinned: false,
    timeStamp: date.getTime(),
  }

  const [input, setInput] = useState(isEdit && note? note : initialState );

  const handleInput = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    input: InputState
  ) => {
    e.preventDefault();
    if(isEdit){
      dispatch(updateNote(input))
    }else{
      dispatch(addNote(input))
      
    }
    // handleClose()
  };

  const handleClose=()=>{
    onClose();
    if (isEdit && note) {
      setInput(note);
    } else {
      setInput(initialState);
    }  }

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={(e) => handleFormSubmit(e, input)}>
          <Flex justifyContent="space-between" alignItems="center">
            <Heading m={2}>
              <Input
                type="text"
                name="title"
                placeholder="Title"
                outline="none"
                border="none"
                focusBorderColor="transparent"
                isRequired
                value={input.title}
                onChange={handleInput}
              />
            </Heading>
            <ModalCloseButton onClick={handleClose} />
          </Flex>

          <ModalBody m={0} p="0 .5rem">
            <Box>
              <FormControl id="body" isRequired>
                <Textarea
                  h="300px"
                  outline="none"
                  border="none"
                  placeholder="Take a note..."
                  name="body"
                  resize="none"
                  focusBorderColor="transparent"
                  value={input.body}
                  onChange={handleInput}
                />
              </FormControl>
            </Box>
          </ModalBody>

          <ModalFooter m={0} p={2}>
            <FormControl>
              <Select
                // defaultValue="Low"
                focusBorderColor="yellow.400"
                w="110px"
                m=".5rem"
                cursor="pointer"
                name="priority"
                value={input.priority}
                onChange={handleInput}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </Select>
            </FormControl>

            <Button type="submit" colorScheme="yellow" size="sm" mr={3} onClick={onClose} >
              Save
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default NoteModal;
