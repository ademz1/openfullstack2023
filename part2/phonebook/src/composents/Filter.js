const Filter =(props)=>{

    return(
        <div>
            filer shown with : <input value={props.person}
          onChange={props.handlefilterChange} />
        </div>
    )
}

export default Filter ;