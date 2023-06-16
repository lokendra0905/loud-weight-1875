import {  Button, Tbody, Td, Tr } from "@chakra-ui/react"
import { changeUserRole } from "../../Redux/adminUserReducer/action"
import { useDispatch } from "react-redux"



export const AdminUserCard = ({name,email,role,_id,handleChangeRole})=>{
    const dispatch = useDispatch()
    const handleEdit = () =>{
        const data = {
            
            role: (role === "admin") ? "user" : "admin" 
        }
        dispatch(changeUserRole(_id,data))
        handleChangeRole()
    } 
    return(
           
      <Tbody>
       
          <Tr borderWidth="2px">
            <Td>{name}</Td>
            <Td>{email}</Td>
            <Td><Button onClick={handleEdit} bg="#af89f1">{role}</Button></Td>
          </Tr>
    
      </Tbody>
  
    )
}