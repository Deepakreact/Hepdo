import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProgressBar from "@ramonak/react-progress-bar";

function GotHelp() {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1// optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

  return (


    <div>
    
    <Carousel responsive={responsive}>
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
    {/*
       <CustomizedProgressBars/>

*/}
 
    <h1>Raised Fund</h1>
    <ProgressBar

    completed={70}
   
    bgColor="blue"
    
    
    />
    
    
    
    </div>

    
    
  
    
    </div>
    
    
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
    {/*
       <CustomizedProgressBars/>

*/}
 
    <h1>Raised Fund</h1>
    <ProgressBar

    completed={70}
   
    bgColor="blue"
    
    
    />
    
    
    
    </div>

    
    
  
    
    </div>
    
    
    </div>
    
    </Carousel>
    
    </div>
  )
}

export default GotHelp