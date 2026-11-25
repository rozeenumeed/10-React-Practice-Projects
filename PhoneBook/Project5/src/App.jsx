import React from 'react'
import { useState } from 'react'
import InputBar from './components/InputBar'
import Crad from './components/Crad'
import Add from './components/Add'

const App = () => {
   const [appear,setAppear]=useState(false);
   const [name,setName]=useState("");
   const [mail,setMail]=useState("");
   const [contact,setContact]=useState([]);
   const [search,setSearch]=useState(" ");
   const [matchingIds,setmatchingIds]=useState([]);
   const [displaySearchedResult,setdisplaySearchedResult]=useState(false);

   function SearchedContact(e){
    setSearch(e.target.value);
   }
   
   

   function HandlePopUp(){
       setAppear(true);
   }
  function HandlePopUpCross(){
       setAppear(false);
       
   }
   function NameValue(e){
     setName(e.target.value);
     
   }
    function MailValue(e){
     setMail(e.target.value);
     
   }
   function AddedContact(){
    setContact([...contact,{name,mail} ])
    setAppear(false);
    console.log(contact);
   
   }
   
   function DeleteContact(index){
    setContact(()=>{
      const newArray=[...contact]
      newArray.splice(index,1);
      return [...newArray];
    });
    setmatchingIds(()=>{
      const newMatchingArray=[...matchingIds]
      newMatchingArray.splice(index,1);
      return [...newMatchingArray];
    });
   }
   function matchingContact() {
  const matched = [];

  contact.map((e) => {
    if (e.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push({ name: e.name, mail: e.mail });
    }
  });

  setmatchingIds(matched);
  setdisplaySearchedResult(true);
}
    
    

  return (
    <div className='h-screen w-1/3 bg-gray-900  m-auto py-5 '>
      <h1 className='h-15 w-[90%] m-auto  flex justify-center items-center font-extrabold text-3xl bg-white text-black'>PhoneBook</h1>
      <InputBar MatchFunction={matchingContact} PopUpFunctionality={HandlePopUp} EnteredValue={SearchedContact} />
      {appear && <Add DisplayedContact={AddedContact} closeFunctionality={HandlePopUpCross} AddedName={NameValue} AddedMail={MailValue} />}
      {!displaySearchedResult && contact.map((item, index) => (
        <div key={index}>
         <Crad DeleteFunction={()=>DeleteContact(index)} ReceivedName={item.name} ReceivedMail={item.mail} />
         </div>
))}
      {displaySearchedResult && matchingIds.map((e,index)=>(
       <div key={index}>
         <Crad DeleteFunction={()=>DeleteContact(index)} ReceivedName={e.name} ReceivedMail={e.mail} />
         </div>
  ))}

    </div>
  )

}
export default App
