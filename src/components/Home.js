import React from 'react'
import { discount,arrowUp,robot,vector} from '../assets/index';
import 'animate.css';

function Home() {
  return (
    <>
    <div className='light-bg'></div>
    <div id='home'>   
    <div className='container'>
      <div className='description'>
        <div className='sale'>
            <img src={discount}/>
            <p><span>20%</span> Discount for <span>1 month </span>account</p>
        </div>

        <div className='heading'>
            <h1>The Next  <div className='getstarted'><span>Get<img src={arrowUp}/>Started</span></div>
            <span>Generation</span>&nbsp;
            Payment&nbsp;Method.</h1>
        </div>
        <div className='paragraph'>
            <p>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
                <br/>
               We examine annual percentage rates, annual fees.
            </p>
        </div>
      </div>
      <div className='img animate__animated animate__pulse animate__infinite	infinite animate__slow'>
        <img src={robot}/>
      </div>
    </div>
    <div className='company-info container'>
      <div>
        <h3>3800+</h3>
        <p>User Active</p>
      </div>
      <div className='center'>
        <h3>230+</h3>
        <p>TRUSTED BY COMPANY</p>
      </div>
      <div>
        <h3>$230M+</h3>
        <p>TRANSACTION</p>
      </div>
    </div>
    </div>
    </>
  )
}

export default Home
