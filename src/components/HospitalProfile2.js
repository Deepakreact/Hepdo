import React,{useEffect,useState} from 'react'
import '../css/hprofile.css'

function HospitalProfile2() {
    var  myuser = window.sessionStorage.getItem("userdata") 
    const [profile, setProfile] = useState({})
    

    useEffect(() => {
      if(!myuser){
        const apiUrl = "http://admin.heapdo.com/api/gethospital/"+(myuser);
        fetch(apiUrl)
          .then((res) => res.json())
          .then(
            (result) => {
              setProfile({
              
                name:result.data.name
              })
              console.log(result.data);
            
            },
            (error) => {
              console.log(error.message)
            }
          );

      }
      


      
      
      
        
      
        

    
   
      
       
    
      return () => {
        
      }
    }, [myuser])
console.log(myuser)
    

  return (

    <div className='h-profile'>
    
    <h1>This is Hospitak profile</h1> 
    <p>{profile.name}</p>
    <p>{profile.mobile}</p>
    <p>{profile.gst}</p>
    
   
    

  
    
    </div>
  )
}

export default HospitalProfile2