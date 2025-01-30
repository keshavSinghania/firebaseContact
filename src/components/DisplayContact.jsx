import React from 'react'
import ContactDiv from './ContactDiv'

function DisplayContact({contacts, setContact, setOnForm, onForm, isEdit, setIsEdit , newName, setNewName, newEmail, setNewEmail,editingId,setEditingId}) {
  return (
    <>
    {
      contacts.map((contact)=>(
        <ContactDiv key={contact.id} setEditingId={setEditingId} editingId ={editingId} setIsEdit={setIsEdit} isEdit={isEdit} setOnForm={setOnForm} onForm={onForm} contact={contact} newName={newName} setNewName={setNewName} newEmail={newEmail} setNewEmail={setNewEmail}/>
      ))
    }
    </>
  )
}

export default DisplayContact