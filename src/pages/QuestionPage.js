import React from 'react'

import Faq from '../components/Faq'
import SimpleAccordion from '../components/FaqAccord'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../css/question.css'

function QuestionPage() {
  return (
    <div className='qp-div'>
    <div className='main-wrapper'>
    <Header/>

    <div className='qp'>
    <div className='qp-faq'>  <Faq/></div>
    <div className='qp-accord'>  <SimpleAccordion/></div>
  
  
    
    </div>
 
  
    
    
 
   
    <Footer/>
    </div>
    </div>
  )
}

export default QuestionPage