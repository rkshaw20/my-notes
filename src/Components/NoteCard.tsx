import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteNote } from "../features/Notes/noteSlice";
import NoteModal from "./NoteModal";

interface Note {
  _id: string;
  title: string;
  body: string;
  createdAt: string;
  priority: string;
  isPinned: boolean;
  timeStamp: number;
}
interface NoteCardProps {
  note: Note;
}
interface UseDisclosureReturn {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const { isOpen, onOpen, onClose } = useDisclosure() as UseDisclosureReturn;

    const dispatch=useDispatch();

    const handleDelete=()=>{
        dispatch(deleteNote(note._id))
    }

  return (
    <Card w="200px" margin=".5rem">
      <CardHeader>
        <Flex justifyContent='space-between' alignItems='center' >
          <Text fontWeight="bold">{note.title}</Text>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<BsThreeDotsVertical />}
              variant='ghost'
              rounded='full'
            />
            <MenuList minW="6rem">
              <MenuItem onClick={onOpen} >Edit</MenuItem>
              <NoteModal isOpen={isOpen} onClose={onClose} note={note} isEdit />
              <MenuItem onClick={()=>handleDelete()} >Delete</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </CardHeader>
      <CardBody>{note.body}</CardBody>
      <CardFooter>{note.priority}</CardFooter>
    </Card>
  );
};
export default NoteCard;
