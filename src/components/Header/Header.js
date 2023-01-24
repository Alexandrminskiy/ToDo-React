// import style from './style.module.css'
import { Form } from '../Form/Form'
import React from 'react'

let Header = ({ addToList }) => {
  return (
    <header>
      <Form addToList={addToList} />
    </header>
  )
}

Header = React.memo( Header)

export {Header}