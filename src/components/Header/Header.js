// import style from './style.module.css'
import { Form } from '../Form/Form'

export function Header({ addToList }) {

  return (
    <header>
      <Form addToList={addToList} />
    </header>
  )
}

