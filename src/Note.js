import React from 'react';
const Note=(props)=>{

    const handledelete=()=>{
        props.deleteItem(props.id);

    } 

return(
    <>
    <div className='note'>
    <h1>{props.title}</h1>
    
  <p>{props.content}</p>
  <button style={{ backgroundColor:'white'}} onClick={handledelete}>delete</button>
  </div>
    </>
)
}
export default Note;