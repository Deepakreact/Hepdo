import React from 'react'
import CustomizedProgressBars from './ProgressBar'
import '../css/help.css'
import ProgressBar from "@ramonak/react-progress-bar";
import VerticalMode from './NeedHelpVertical';
import GotHelp from './GotHelp';




function Help() {


 
    


  return (
      <div>
      
 
    
    <div className='help-p'>
   
    
    <div className='need-fund'>
    <h1>Need urgent fund for ?</h1>
    <div className='vertical'>
    <VerticalMode/>
    
    </div>
    <a href='/login'>
    <button className='fund-btn' >Need Fund ?</button>
    
    </a>

    {/*<div className='needfund-form-div'>
        <div className='contact-page-div'>
    <div className='contact-page-h3'>
    <h3>Have A Query Feel Free To Contact</h3>

    
    </div>
    <form className='contact-page-form'>
    <input type='text'  placeholder="name"></input>
    <input type='text'  placeholder="email"></input>
    <input type='text'  placeholder="mobile"></input>
    <input type='text'  placeholder="cause"></input>
    <button type='submit' className='contact-page-btn'>Submit</button>
 
    
    
    </form>
    
  </div>
    
    
  </div>*/}


    
    </div>

    
    
 
    <div className='got-help'>
    
    <div className='help-img'>
    <img src="http://www.choa.org/-/media/Images/Childrens/global/social-share-images/patients/stories/matthew-ramirez/former-pediatric-cancer-patient-now-pediatric-cancer-doctor-1200x630.jpg"  alt="Matthew: Fighting Cancer as a Child and as a Doctor | Children's Healthcare  of Atlanta" ></img>
    
    </div>
    <div className='patient-details-div'>
    <div className='patient-details'>
    <h4>Arjun</h4>
    <p>Age: 11</p>
    <p>Blood Group: A+</p>
    <p>Illness: Cancer</p>
    
    </div>
    <div className='fund-meter'>
    
     

*
 
    <h1>Raised Fund</h1>
    <ProgressBar

    completed={70}
   
    bgColor="blue"
    
    
    />
    
    
    
    </div>

    
    
  
    
    </div>
    
    
</div>
    
    
 

  

    



    
    
  
  
 
  


   
 
   
    
    
    
    </div>

  


    </div>
  )
}

export default Help