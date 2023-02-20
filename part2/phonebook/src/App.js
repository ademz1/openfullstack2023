import Persons from "./composents/Persons";
import PersonForm from "./composents/PersonForm";
import Filter from "./composents/Filter";
import { useState ,useEffect} from "react";
import axios from 'axios';

const App = () =>
 {
  const [persons, setPersons] = useState([]);
  const [courent,setCourent] = useState('');
  const[newperson,setNewperson]=useState('');
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/Persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, []);
  const handlefilterChange = (event)=>{
    //console.log(event.target.value)
    setCourent(event.target.value);
   
  }
const addperson=(event)=>{
  event.preventDefault();
  setPersons(persons.concat(newperson));
  setNewperson('');
}
const handlepersonnumberChange = (event)=>{
  const newp = {name : newperson.name,number: event.target.value};
  setNewperson(newp);
 
}
const handlepersonnameChange = (event)=>{
  const newp = {number : newperson.number,name: event.target.value};
  setNewperson(newp);
}


  return (
    <div>
      <h2>Phonebook</h2>

      <Filter handlefilterChange={handlefilterChange} person={courent} />

      <h3>Add a new</h3>

      <PersonForm newperson={newperson} addperson={addperson} handlepersonnameChange={handlepersonnameChange} 
      handlepersonnumberChange={handlepersonnumberChange} />

      <h3>Numbers</h3>
      {courent !==''?
      <Persons persons={persons.filter(value => value.name.includes(courent))} /> :  <Persons persons={persons} />
      }
    </div>
  )
}

export default App;
