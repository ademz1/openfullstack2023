import { useState } from 'react'
const Button=(props)=>{
  return(
    <button onClick={props.hundelclick}>{props.text}</button>
  )
}
const App = () => {
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ] ;
   
  const [selected, setSelected] = useState(0);
  const [maxvote,setMaxvote]=useState(0);
  let table= anecdotes.map(value => {
    return {name:value,vote:0}
})
const [anecdotesV,setAnecdotesV]= useState(table);

const hundelclickvote=()=>{
 let copy = [...anecdotesV];
 copy[selected].vote+=1 ;
 if (copy[selected].vote>anecdotesV[maxvote].vote)
 setMaxvote(selected);

 setAnecdotesV(copy);
}
  return (
    <div>
      <h2> anecdotes pf the day </h2>
      <p> {anecdotesV[selected].name}</p>
      <p>  has vote {anecdotesV[selected].vote}</p>
      <Button hundelclick={()=> setSelected(Math.floor(Math.random() * anecdotes.length))} text="next anecdotes"/>
      <Button hundelclick={hundelclickvote} text="vote"/>
      <h2> anecdotes with the mose vote </h2>
      <p> {anecdotesV[maxvote].name}</p>
      <p>  has vote {anecdotesV[maxvote].vote}</p>
    </div>
  )
}

export default App
