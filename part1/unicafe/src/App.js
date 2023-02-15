import logo from './logo.svg';
import './App.css';

import { useState } from 'react'

const Button=(props)=>{
  return(
    <button onClick={props.hundelclick}>{props.text}</button>
  )
}
const StatisticLine=(props)=>{

  let value= 0;
  if(props.value) value= props.value;
  if(props.text ==='positive') value+='%';
  return(
    <tr>
   <td>
       {props.text} 
   </td>
   <td>
   {value} 
   </td>
   </tr>
  )
}
const Statictics=(props)=>{
  const all=props.nbrbad+props.nbrgood+props.nbrneutral;
  return(
   <div>
   <table>
      <tbody>
      <StatisticLine text="good" value ={props.nbrgood} />
      <StatisticLine text="neutral" value ={props.nbrneutral} />
      <StatisticLine text="bad" value ={props.nbrbad} />
      <StatisticLine text="all" value ={all} />
      <StatisticLine text="average" value ={(props.nbrgood-props.nbrbad)/all} />
      <StatisticLine text="positive" value ={(props.nbrgood/all)*100 } />
      </tbody>
      </table>
   </div>
  )
}
const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
  <div >
    <p>  give a feedback </p> 
      <Button hundelclick={()=>setGood(good+1)} text="good"/>
      <Button hundelclick={()=>setNeutral(neutral+1)} text="neutral"/>
      <Button hundelclick={()=>setBad(bad+1)} text="bad" />
     <Statictics nbrgood={good} nbrneutral={neutral} nbrbad={bad} />
    </div>
  )
}

export default App
