import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { db } from '../config/firebase';
import { InputContactForm } from './InputContactForm';
function ContactDiv({contact, onForm, setOnForm, isEdit, setIsEdit, newName, setNewName, newEmail, setNewEmail,editingId,setEditingId}) {
   

  //function to delete an data from database
  const deleteDataFromDb = async(id)=>{
    try {
      await deleteDoc(doc(db,"contacts",id));
    } catch (error) {
      console.log("error while deleting data from database");
      console.log(error)
    }
  }

  
  return (
    
    <div className=' flex border h-[50px] w-[60vw] m-auto mt-3 md:w-[40vw] bg-[#FFEAAE] rounded-l items-end justify-around'>
        <div className="details flex flex-col">
            <h2 className="font-bold text-[16px]">{contact.name}</h2>
            <p>{contact.email}</p>
        </div>
        <div className="buttons flex items-center justify-center h-[100%] gap-2">
        <FiEdit onClick={()=>{
          setOnForm(true);
          setIsEdit(true);
          setNewName(contact.name);
          setNewEmail(contact.email);
          setEditingId(contact.id);
          // console.log(`check editing id ${contact.id}`)
        }} className='size-[20px]'/>
        <MdDelete onClick={()=>{deleteDataFromDb(contact.id)}} className='size-[20px]'/>
        </div>
    </div>
  )
}

export default ContactDiv