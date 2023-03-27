import React from 'react'

function Circle(props) {
    const{color,name,handleClick}=props
  return (
    <>  
    <div style={{background:color}} onClick={handleClick} className="timecircle">{name}</div>
    </>
  )
}

export default Circle