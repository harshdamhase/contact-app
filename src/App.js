import { useState } from 'react';
import './App.css';
import { phonebook } from './Data/phonebook';
import ContactCard from './Components/ContactCard';

function App() {
const [contacts, setContacts] = useState(phonebook);

  return (
    <>
      <h1 className='text-center'> Contact App</h1>
      <div>
     {
     contacts.map((contact, index) =>{
      const {name,mobile} = contact;

      return <ContactCard key={index} name={name} mobile={mobile}/>

     })}
     </div>  
    </>
  );
}

export default App;
