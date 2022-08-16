import React,{useState} from 'react'
import style from "./Content.module.css";
import emailjs from "emailjs-com";
const Content = () => {

  const [Name,setName]=useState("");
  const [lastName,setLastName]=useState("");
  const [email,setEmail]=useState("");
  const [phno,setPhno]=useState("");
  const [pass,setPass]=useState("");
  const [confPass,setConfPass]=useState("");
  const handleClick=(e)=>{
    e.preventDefault();
    // alert(Name);
    // alert(lastName);
    // alert(email);
    // alert(phno);
    // alert(pass);
    // alert(confPass);
    
    if(pass!=confPass){  
      alert("passwords not matching");
      setConfPass("");
      setPass("");
    }
    if(pass.length<6){
      alert("password too short..!!")
    }
  }
  return (
    <div className={style.container}>
        <form onSubmit={handleClick}>
            <div>
            <div>
            <label>First Name*</label>
            <input type="text" required name="Name" value={Name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
            <label>Last Name</label>
            <input type="text" required name="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            </div>
            </div>
            
            <div>
            <div>
            <label>Email*</label>
            <input type="email" required name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
            <label>Phone Number</label>
            <input type="number" required name="phno" value={phno} onChange={(e)=>setPhno(e.target.value)}/>
            </div>
            </div>

            <div>
            <div>
            <label>Password</label>
            <input type="password" required name="pass" value={pass} onChange={(e)=>setPass(e.target.value)}/>
            </div>
            <div>
            <label>Confirm Password</label>
            <input type="password" required name="confPass" value={confPass} onChange={(e)=>setConfPass(e.target.value)}/>
            </div>
            </div>

            <button>Submit</button>
        
        </form>
        
    </div>
  )
}

export default Content;