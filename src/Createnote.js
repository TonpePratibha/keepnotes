import React from 'react';
import { useState } from 'react';


const Createnote=(props)=>{

    const[note,setnote]=useState({
        title:"",
        content:"",
        
    })



    const handlechange=(e)=>{
        const {name,value} = e.target

     setnote((prevdata)=>{
        return {
            ...prevdata,
            [name]:value,
        }
     })
     console.log(note)
    }


    const handleclick=()=>{
       props.passNote(note);
       setnote({
        title:"",
        content:"",
        
    })
       
    }
    return(
        <>
        <div className="main-note">
            
                <input type='text' name="title" placeholder='add title' value={note.title} onChange={handlechange}/><br/>
                <textarea rows="" column ="" type="text" name="content" placeholder="write a note" value={note.content} onChange={handlechange}></textarea><br/>
                <button style={{ backgroundColor:'white'}} onClick={handleclick}>add</button>
            
        </div>

        </>
    )
}
export default Createnote;