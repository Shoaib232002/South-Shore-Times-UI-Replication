import React from 'react'
import './button.css'
function Button({buttonText}) {
  return (
    <>
    <div className="button-bg">
    <button>{buttonText}</button>
    </div>
    </>
  )
}

export default Button