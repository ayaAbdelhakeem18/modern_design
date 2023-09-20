import React, { useRef, useState } from 'react';
import {logo} from "../assets/index";

function Nav() {
  const navref=useRef("navlist")
  const[click,setclick]=useState(false)
  return (
    <nav>
      <img src={logo} alt="Logo" width={"114px"} height={"32px"}/>
      <ul className='main-list'>
        <li><a href='#home'    >Home    </a></li>
        <li><a href='#about' >About Us</a></li>
        <li><a href='#features'>Features</a></li>
        <li><a href='#solution'>Solution</a></li>
      </ul>
      <div className='mobile-screen' onClick={()=>click?setclick(false):setclick(true)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='nav-list' ref={navref} style={click?{display:"block"}:{display:"none"}}>
        <ul>
        <li><a href='#home'    >Home    </a></li>
        <li><a href='#about' >About Us</a></li>
        <li><a href='#features'>Features</a></li>
        <li><a href='#solution'>Solution</a></li>
        </ul>
      </div>
    </nav>

  )
}

export default Nav
