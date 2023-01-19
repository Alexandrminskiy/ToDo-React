// import style from './style.module.css'
import { Form } from '../Form/Form'

// props - объект с перевадаемыми значениями
export function Header(props) {

  return (
    <header>
      <Form addToList={props.addToList} />
    </header>
  )
}

