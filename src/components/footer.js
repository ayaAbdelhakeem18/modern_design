import React from 'react'
import{facebook, instagram, linkedin, logo, twitter} from "../assets/index"

function Footer() {
  return (
    <footer>
        <div className='container'>
          <div className='logo'>
            <img src={logo}></img>
            <p>A new way to make the payments easy, reliable and secure.</p>
          </div>
          <div className='links'>
            <h4>Usefull Links</h4>
            <ul>
                <li>Content</li>
                <li>How it Works</li>
                <li>Create</li>
                <li>Explore</li>
                <li>Terms & Services</li>
            </ul>
          </div>
          <div className='community'>
          <h4>Community</h4>
            <ul>
                <li>Help Center</li>
                <li>Partners</li>
                <li>Suggestions</li>
                <li>Blog</li>
                <li>Newsletters</li>
            </ul>
          </div>
          <div className='partner'>
            <h4>Partner</h4>
            <ul>
                <li>Our Partner</li>
                <li>Become a Partner</li>
            </ul>
          </div>

          <div className='copy-right'>
          <div className=''>
               <img src={instagram}></img> 
               <img src={facebook}></img> 
               <img src={twitter}></img> 
               <img src={linkedin}></img> 
            </div>
            <p>Copyright &copy; 2021 HooBank. All Rights Reserved.</p>
          </div>
        </div>
    </footer>
      )
}

export default Footer
