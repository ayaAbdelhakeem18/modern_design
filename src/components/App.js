import React from 'react';
import './App.scss';
import { Reusable1 ,H21,P1,textbutn1,FirstSectionGroup2, H22, P2, textbutn2, H23, textbutn3, P3} from './feature-props';
import { bill, card } from '../assets';
import Features from './features';
import Home from './Home';
import Nav from './Nav';
import About from './About';
import Solution from './solution';
import Footer from './footer';

function App() {
const features=[{groub1:<Reusable1 heading={H21} paragraph={P1} Btext={textbutn1}/>,groub2:<FirstSectionGroup2/>},
 {groub1:<img src={bill}/>,groub2:<Reusable1 heading={H22} paragraph={P2} Btext={textbutn2}/>},
{groub1:<Reusable1 heading={H23} paragraph={P3} Btext={textbutn3}/>,groub2:<img src={card}/>}]  
  return (
    <div className="app">
      <Nav/>
      <Home/>
      <div id='features'>
     {features.map((ele,ind)=>{
        return(
          <Features key={ind} section={"section"+(parseInt(ind)+1)} groub1={ele.groub1} groub2={ele.groub2}/>
        )
      })}
    </div>
    <About/>
    <Solution/>
    <Footer/>
    </div>
  )
}

export default App
