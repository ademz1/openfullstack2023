const Persons =(props)=>{

    return(
        <div>
       {props.persons.map(value => <p key={value.id}> name : {value.name} number : {value.number }</p> )}
        </div>
    )
}

export default Persons ;