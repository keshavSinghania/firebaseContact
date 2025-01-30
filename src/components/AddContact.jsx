import React from 'react'
import { ImCross } from "react-icons/im";
import { InputContactForm } from './InputContactForm';

export const AddContact = ({onForm, setOnForm, setIsEdit, isEdit, newName, setNewName, newEmail, setNewEmail, editingId, setEditingId}) => {
  return (
    <>
    <div className=" relative z-10 bg-white w-[45vw] h-[35vh] md:w-[35vw] m-auto">
        <div className='flex  w-[100%]  md:w-[35vw] h-5 items-end justify-end '>
            <ImCross onClick={()=>{
              setOnForm(false);
              setIsEdit(false);
              setNewName("");
              setNewEmail("");
            }} className='mr-3'/>
        </div>
        <InputContactForm editingId={editingId} setEditingId={setEditingId} newName={newName} setNewName={setNewName} newEmail={newEmail} setNewEmail={setNewEmail} setIsEdit={setIsEdit} setOnForm={setOnForm} isEdit={isEdit}/>
    </div>
    <div className=" backdrop backdrop-blur w-screen h-screen absolute top-0">

    </div>
    </>
  )
}
