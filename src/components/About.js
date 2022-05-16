import React,{useEffect,useRef} from 'react'
import lottie from 'lottie-web'
import '../css/contact.css'

function About() {
    useEffect(() => {
        lottie.loadAnimation({
            container:ref.current,
            loop:true,
            autoplay:true,
            renderer:'svg',
            animationData:require('../doctorweb.json')

        })
  

        
        return () => {
            //
        }
    }, [])
    const ref = useRef(null)


  return (
    
    
    <div>
    <div ref={ref} className="lottie-appoint">
    </div>
    

    
    </div>
  )
}

export default About
