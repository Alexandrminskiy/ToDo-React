import React from 'react'
import style from './style.module.css'

let Footer = ({ deleteAll }) => {
  
  return (
    <footer>
      <button onClick={() => deleteAll()} type="button" className="btn btn-danger mt-5">Delete</button>
    </footer>
  )
}

Footer = React.memo(Footer)

export { Footer }