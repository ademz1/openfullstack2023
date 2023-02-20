const Total =(props)=>{
    const number = props.exercices.reduce((sum,currentvalue)=>{
        return sum + currentvalue.exercises
    },0)
    return (
      <div>
           <p>Number of exercises {number}</p>
      </div>
     
    )
  
    
  }
  export default Total ;