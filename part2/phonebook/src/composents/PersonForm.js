const PersonForm =(props)=>{

    return(
        <div>
        <form onSubmit={props.addperson}>
        <p> name </p>
        <input
          value={props.newperson.name}
          onChange={props.handlepersonnameChange}
        />
        <p>number</p>
        <input
          value={props.newperson.number}
          onChange={props.handlepersonnumberChange}
        />
        <button type="submit">save</button>
      </form>   
        </div>
    )
}

export default PersonForm ;