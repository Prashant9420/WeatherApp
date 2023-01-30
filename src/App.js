import React,{useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import bgimg from './weatherbg.jpg'
function App(){
  const [cityName,setCity]=useState("");
  const [temp,setTemp]=useState("");
  const [load,setLoad]=useState(false);
  const [weatherIconLink,setWeatherIconLink]=useState("");
  function getTemp(){
    if(!cityName){alert("enter the city name");return;}
    setLoad(true);
    fetch(`https://api.weatherapi.com/v1/current.json?key=9bf75f339b35415b93b192507232101&q=${cityName}`).then((resp)=>{
      resp.json().then((res)=>
      {
        try{
          if(res.location.name!==cityName && cityName.toLowerCase()!==res.location.name.toLowerCase())
          {alert("Enter a valid city name");return;}
        setTemp(res.current.temp_c)
        setWeatherIconLink(res.current.condition.icon);
          console.log(res)
      }

        catch(e){
          alert("Enter a valid city name")
        }
      })
      setLoad(false)
    })
    
  }
  useEffect(()=>{
    setCity(cityName.trim());
    if(cityName.length===0)
      setTemp("");
  },[cityName])
  return(
    <div style={
      {
        height:'100vh',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        backgroundImage:`url(${bgimg})`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat'
      
      }}>
      
      <InputGroup className="mb-3" style={{width:'80vw'}} value={cityName} onChange={(e)=>setCity(e.target.value)}>
        <Form.Control
          placeholder="Enter City Name"
          aria-label="Enter City Name"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" style={{color:'white',border:'2px solid white'}} id="button-addon2" onClick={()=>getTemp()}>
          Get Temp.
        </Button>
      </InputGroup>
      {(temp.length!==0 && cityName.length!==0)?
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-around',}}><h2 style={{padding:"10px 20px",color:'white'}}>  {"feels like "+Math.round(temp)+"°C"}</h2><img src={weatherIconLink} alt='weather icon'/></div>:
      (load===true)?<h2>loading...</h2>:
      <div style={{height:'60px'}}></div>}
    </div>
  )
}
export default App;