// import { addDoc, collection } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../config/firebase'
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore'


export const InputContactForm = ({editingId,setEditingId, setOnForm, setIsEdit, isEdit, newName, setNewName, newEmail, setNewEmail}) => {

    //function to add new value to database
    const addContactToDb = async (newName, newEmail) => {
        try {
            const contactRef = collection(db, "contacts");
            await addDoc(contactRef, { name: newName, email: newEmail })

        } catch (error) {
            console.log("error while adding data to database")
        }
    }
     //function to update or edit value
     const editDataFromDb = async ( newName, newEmail) => {
      try {
        if (!editingId) {
          throw new Error('Editing ID is not defined')
        }
        const contactRef = doc(db, 'contacts', editingId)
        await updateDoc(contactRef, { name: newName, email: newEmail })
        console.log('Contact updated in database')
      } catch (error) {
        console.error('Error while updating data in database:', error)
        setError('Error while updating data in database')
      }
    }

    //function to handle submit
    const handleSubmit=(e)=>{
        e.preventDefault();
        setOnForm(false);
        if (isEdit) {
            editDataFromDb(newName, newEmail)
          } else {
            addContactToDb(newName, newEmail)
          }
    }

    return (
        <>
            <form onSubmit={handleSubmit}
                action="" className='flex flex-col gap-1 m-2 rounded'>
                <label className='font-bold ' htmlFor="">Name</label>
                <input required type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder='Enter Contact Name' className='border rounded text-center border-black' />
                <label className='font-bold' htmlFor="">Email</label>
                <input  required type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} placeholder='zyx@gmail.com' className='border rounded text-center border-black' />
                <button type='submit' className='ml-[60%] flex flex-row bg-[#FCCA3F] w-[95px] items-center justify-center h-[25px] rounded border border-black md:ml-[70%] m-2'>{isEdit?"Update":"Add"}</button>
            </form>
        </>
    )
}
