import React from 'react'
import {airbnb, binance, coinbase, dropbox, people01,people02,people03,quotes} from "../assets/index"

function About() {
  const opinions=[{name:"Herman Jensen",img:people01,position:"Founder & Leader",opinion:"Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver."},{name:"Steve Mark",img:people02,position:"Founder & Leader",opinion:"Money makes your life easier. If you're lucky to have it, you're lucky."},{name:"Kenn Gallagher",img:people03,position:"Founder & Leader",opinion:"It is usually people in the money business, finance, and international trade that are really rich."}];  
  return (
    <div id='about'>
        <div className='container'>
         <div className='heading'>
            <h2>What people are saying about us</h2>
            <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
         </div>
         <div className='quotes'>
           {opinions.map((ele,ind)=>{
            return(
                <div key={ind} className='quote'>
                  <img src={quotes}></img>
                  <p>{ele.opinion}</p>
                  <div className='id'>
                    <img src={ele.img}/>
                     <div>
                      <span>{ele.name}</span>  
                     <br></br>
                     {ele.position}
                     </div>
                  </div>
                </div>
            )
           })}
         </div>
         <div className='companies'>
            <img src={airbnb}/>
            <img src={binance}/>
            <img src={coinbase}/>
            <img src={dropbox}/>
         </div>
        </div>
    </div>
  )
}

export default About
