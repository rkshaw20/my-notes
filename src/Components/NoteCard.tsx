import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillDelete, AiFillPushpin,AiOutlinePushpin } from "react-icons/ai";
import { IoMdArchive } from "react-icons/io";
import { MdRestore } from "react-icons/md";
import { RiInboxUnarchiveFill } from "react-icons/ri";

import { useDispatch } from "react-redux";
import {
  deleteFromTrash,
  moveToArchive,
  moveToTrash,
  pinNote,
  restoreFromTrash,
  unArchive,
} from "../features/Notes/noteSlice";
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
  isArchive?: boolean;
  isTrash?: boolean;
}
interface UseDisclosureReturn {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, isArchive, isTrash }) => {
  const { isOpen, onOpen, onClose } = useDisclosure() as UseDisclosureReturn;

  const dispatch = useDispatch();

  return (
    <Card w="300px" h='fit-content' margin=".5rem">
      <CardHeader p='.5rem 1.2rem'>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold">{note.title}</Text>
          <IconButton
            aria-label="pin"
            // icon={<AiFillPushpin />}
            icon={ note.isPinned ? <AiFillPushpin />:<AiOutlinePushpin />}
            variant="ghost"
            rounded="full"            onClick={() =>
              dispatch(pinNote({ ...note, isPinned: !note.isPinned }))
            }
          />
        </Flex>
      </CardHeader>
      <CardBody p='.5rem 1.2rem' >{note.body}</CardBody>
      <CardFooter p='.5rem 1.2rem'>
        <Flex justifyContent="space-between" alignItems="center" w="full">
          <Badge
            variant="outline"
            colorScheme={
              note.priority === "Low"
                ? "green"
                : note.priority === "Medium"
                ? "yellow"
                : "red"
            }
          >
            {note.priority}
          </Badge>
          <Flex gap={2} placeItems='center' >
            {isTrash ? (
              <Icon
                as={MdRestore}
                boxSize="1.3rem"
                cursor="pointer"
                onClick={() => dispatch(restoreFromTrash(note))}
              />
            ) : isArchive ? (
              <Icon
                boxSize="1.3rem"
                as={RiInboxUnarchiveFill}
                cursor="pointer"
                onClick={() => dispatch(unArchive(note))}
              />
            ) : (
              <Icon
                boxSize="1.3rem"
                as={IoMdArchive}
                cursor="pointer"
                onClick={() => dispatch(moveToArchive(note))}
              />
            )}

            {isTrash ? (
              <Icon
                as={AiFillDelete}
                boxSize="1.3rem"
                cursor="pointer"
                onClick={() => dispatch(deleteFromTrash(note))}
              />
            ) : (
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<BsThreeDotsVertical />}
                  variant="ghost"
                  rounded="full"
                />
                <MenuList minW="6rem">
                  <MenuItem onClick={onOpen}>Edit</MenuItem>
                  <NoteModal
                    isOpen={isOpen}
                    onClose={onClose}
                    note={note}
                    isEdit
                  />

                  <MenuItem onClick={() => dispatch(moveToTrash(note))}>
                    Trash
                  </MenuItem>
                </MenuList>
              </Menu>
            )}
          </Flex>
        </Flex>
      </CardFooter>
    </Card>
  );
};
export default NoteCard;
