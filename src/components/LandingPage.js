import React from 'react'
import Pages from './Pages'
import Features from './Features'
import Extensions from './Extensions'
import Tutorials from './Tutorials'
import Contact_us from './Contact_us'

const LandingPage = () => {


  
  return (
    <div>
    <div className='homepage'>
      <p>CREATIVES</p>
      <h4> POWER BY PSDFREEBIES.COM </h4>
    </div>
    <div id='pages'>
      <Pages />
    </div>
    <div id='features'>
      <Features />
    </div>
    <div id='extensions'>
      <Extensions />
    </div>
    <div id='tutorials'>
      <Tutorials />
    </div>
    <div id='contact-us'>
      <Contact_us />
    </div>
    </div>
  )
}

export default LandingPage
