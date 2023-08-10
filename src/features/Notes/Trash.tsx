import { Flex, Heading } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import NoteCard from "../../Components/NoteCard"

const Trash: React.FC=()=>{
    const trashNotes=useSelector((store:RootState)=>store.note.trash)
    return(
        <Flex h='full' flexDir="column" alignItems="center">
        <Flex flexWrap="wrap">
          {trashNotes.map((note) => (
            <NoteCard key={note._id} note={note} isTrash />
          ))}
        </Flex>
      </Flex>   
    )
}
export default Trash