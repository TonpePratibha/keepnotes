//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Createnote from './Createnote';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';

const App=()=> {

const [additem, setAdditem]=useState([])

  const Addnote=(note)=>{
    //alert("i am clicked")
      setAdditem((prevdata)=>{
        return[...prevdata,note];
      })
      console.log(note);
  }

  const ondelete=(id)=>{
    setAdditem((olddata)=>olddata.filter((currdata,index)=>{
      return index !==id;
    })

    
    )
  }

  return (<>
  <Header/>
  <Createnote  passNote={ Addnote}/>
  {
    additem.map((val,index)=>{
      return(
        <Note
      key={index}
      id={index}
      title={val.title}
      content={val.content}
      deleteItem={ondelete}
      />
      )
      
    })
  }
  <Footer/>
    </>
  );
}

export default App;
