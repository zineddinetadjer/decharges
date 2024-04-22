import "./style.css";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import axios from "axios";

export default function App() {

  //states

  const[sender,setSender]=useState('')
  const[receiver,setReceiver]=useState('')
  const[desk,setDesk]=useState('')
  const[date,setDate]=useState('')
  const[modele,setModele]=useState('')
  const[ns,setNs]=useState('')

 // submit form
  const handleSubmit=(e)=>{
    e.preventDefault()
   // console.log(sender,receiver,desk,date,modele,ns)

   const data={
    IT:sender,
    Receiver:receiver,
    Desk:desk,
    Date:date,
    Modele:modele,
    NS:ns,
   }
   axios.post('https://sheet.best/api/sheets/5f906675-2d39-483b-8dbc-f30d1711b9ed',data).then((response)=>{
    console.log(response);
    setSender('')
    setReceiver('');
    setDesk('');
    setDate('');
    setModele('');
    setNs('')
   })
  }

  
  return (
    <div>
      <Navbar/>
    <div className="autres">
      <h1>Please fill the form</h1>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <input placeholder="Sender Name" type="text" onChange={(e)=>setSender(e.target.value)} value={sender}/>
          <input placeholder="Reciever Name" name="reciever" type="text" onChange={(e)=>setReceiver(e.target.value)} value={receiver}/>
          <input placeholder="Receiver Desk" name="desk" type="text" onChange={(e)=>setDesk(e.target.value)} value={desk}/>
          <input placeholder="Date" name="date" type="text" onChange={(e)=>setDate(e.target.value)} value={date}/>
          <input placeholder="Modele" name="modele" type="text" onChange={(e)=>setModele(e.target.value)} value={modele}/>
          <input placeholder="Numero de serie" name="ns" type="text" onChange={(e)=>setNs(e.target.value)} value={ns}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
}
