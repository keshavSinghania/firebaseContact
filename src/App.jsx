import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import InputAddSection from './components/InputAddSection'
import NoContact from './components/NoContact'
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from './config/firebase';
import ContactDiv from './components/ContactDiv';
import DisplayContact from './components/DisplayContact';
import { AddContact } from './components/AddContact';
import { use } from 'react';

function App() {
  const [contacts, setContacts]=useState([]);
  const [onForm, setOnForm]=useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [newName, setNewName] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [editingId,setEditingId]=useState(null);
  const [searchedInput, setSearchedInput]=useState()
  const [originalData, setOriginalData]=useState([])

  //function for extract data from fire base and store in const named as contact
  useEffect(()=>{
    const getContacts= async()=>{
      try {
        const contactRef = collection(db,"contacts");
        onSnapshot(contactRef, (snapshot)=>{
          const contactLists = snapshot.docs.map((doc)=>{
            return{
              id: doc.id,
              ...doc.data(),
          };
        });
        setContacts(contactLists);
        setOriginalData(contactLists);
        return contactLists;
      });
    }
      catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  //function to set filter data on the basic of search
  useEffect(() => {
    filterData()
  }, [searchedInput])

  const filterData=()=>{
    if(searchedInput===""){
      setContacts(originalData);
    }
    else{
      const filteredContacts = originalData.filter((contact) => {
        return contact.name.toLowerCase().includes(searchedInput.toLowerCase());
      });
      setContacts(filteredContacts);
    }
  }
  

  return (
    <>
    <NavBar></NavBar>
    <InputAddSection searchedInput={searchedInput} setSearchedInput={setSearchedInput} setOnForm={setOnForm}></InputAddSection>
    {contacts.length===0?<NoContact></NoContact>:
    <DisplayContact editingId={editingId} setEditingId={setEditingId} newName={newName} setNewName={setNewName} newEmail={newEmail} setNewEmail={setNewEmail} setIsEdit={setIsEdit} isEdit={isEdit} onForm={onForm} setOnForm={setOnForm} contacts={contacts} setContacts={setContacts}></DisplayContact>
    }

    {onForm? <AddContact  setEditingId={setEditingId} editingId={editingId} newName={newName} setNewName={setNewName} newEmail={newEmail} setNewEmail={setNewEmail} setIsEdit={setIsEdit} isEdit={isEdit} onForm={onForm} setOnForm={setOnForm}/> :console.log("add contact form off")}
    </>
  )
}

export default App