import React from 'react'

const Button = ({text, click, background}) => {
  return <button className={`btn ${background}`} onClick={click}>{text}</button>
}

export default Button