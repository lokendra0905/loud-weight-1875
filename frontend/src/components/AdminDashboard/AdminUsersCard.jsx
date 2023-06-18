import {  Button, Tbody, Td, Tr } from "@chakra-ui/react"
import { changeUserRole } from "../../Redux/adminUserReducer/action"
import { useDispatch } from "react-redux"



export const AdminUserCard = ({name,email,role,_id,handleRefresh})=>{
    const dispatch = useDispatch()
    const handleEdit = () =>{
        const data = {
            
            role: (role === "Admin") ? "User" : "Admin" 
        }
        dispatch(changeUserRole(_id,data))
        handleRefresh()
    } 
    return(
           
      <Tbody>
       
          <Tr borderWidth="2px" >
            <Td textAlign={"center"}>{name}</Td>
            <Td textAlign={"center"}>{email}</Td>
            <Td textAlign={"center"}><Button onClick={handleEdit} bg="#af89f1">{role}</Button></Td>
          </Tr>
    
      </Tbody>
  
    )
}