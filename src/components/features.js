import React from 'react'

function Features(props) {
  return (
       <div className={props.section}>
        <div className='container'>    
          <div className='group1'>
            {props.groub1}
          </div>
          <div className='group2'>
            {props.groub2}
          </div>
        </div>
        </div> 
  )
}

export default Features;
