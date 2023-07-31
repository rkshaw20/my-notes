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
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteNote } from "../features/Notes/noteSlice";

interface Note {
    _id:string;
  title: string;
  priority: string;
  body: string;
}
interface NoteCardProps {
  note: Note;
}

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {

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
              <MenuItem>Edit</MenuItem>
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
