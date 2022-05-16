import Axios from 'axios'
import React,{useState,useEffect} from 'react'
import '../css/help.css'

function Mydoctorlist2() {

   const [doctorList, setDoctorList] = useState([])
   const [profile, setProfile] = useState({})
   var myuser = window.sessionStorage.getItem("userdata") //

   useEffect(() => {
       Axios.get(
        `http://admin.heapdo.com/api/gethospital/${myuser}`

       ).then((res)=>setProfile(res.data.data))
       .catch((error)=>console.log(error.message))



       Axios.get("http://admin.heapdo.com/api/getdocter/"+myuser).then((res)=> console.log(setDoctorList(res.data.item)))
       .catch((error)=>(console.log(error.message)))
     
   
     return () => {
       //
     }
   }, [myuser])
   

  

 
    console.log(profile)
    console.log(myuser)
    console.log(doctorList)
    


  return (
    <div className='docterlist2'>
    <h1>This is list</h1>

    <h1> {
        profile.name
    }</h1>

    <h1> {
        profile.mobile
    }</h1>

   




  
    
    
    
    </div>
  )
}

export default Mydoctorlist2