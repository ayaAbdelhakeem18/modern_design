import React from 'react';
import {send,star,shield,apple,google} from "../assets/index"

//group1 FIRST SECTION , groub2 THIRD SECTION

   //first section variables
export const H21=  `You do the business, we’ll handle the money.`;
export const P1=`With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.`;
export const textbutn1=`Get Started`;
   //second section variables
export const H22=  `Easily control your billing & invoicing.`;
export const P2=`Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.`;
export const textbutn2=undefined;
  //third section variables
export const H23=  `You do the business, we’ll handle the money.`;
export const P3=`With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.`;
export const textbutn3=`Get Started`;

function Reusable1(props) {
  return (
    <div>
      <h2>
        {props.heading}
      </h2>
      <p>{props.paragraph}</p>

      {props.Btext==undefined?<div><img src={apple}/><img src={google}/></div>:<button className='section-btn'>{props.Btext}</button>} 
    </div>
  )
}

export {Reusable1};

//groub2 First section

function FirstSectionGroup2() {
const pros=[{head:`Rewards`,icon:star,p:`The best credit cards offer some tantalizing combinations of promotions and prizes`},{head:`100% Secured`,icon:shield,p:`We take proactive steps make sure your information and transactions are secure.`},{head:`Balance Transfer`,icon:send,p:`A balance transfer credit card can save you a lot of money in interest charges.`}]

return (
    <div >
    {pros.map((ele,ind)=>{
        return(
       <>   
      <div key={ind} className='recentagle'>     
      <div className='icon'> <img src={ele.icon}/> </div>
      <div>
      <h3>{ele.head}</h3>
      <p>{ele.p}</p>
      </div>
      </div>
      </> 
      )
    })}
    </div> 
  )
}

export{FirstSectionGroup2}
