import { render } from '@testing-library/react'
import style from './style.module.css'

export function Footer(props) {
  const handleClick = () => {
    props.changeTodo([])
  }

console.log('Render footer')

  return (
    <footer>
      <button onClick={handleClick} type="submit" className="btn btn-danger">Delete</button>
    </footer>
  )
}

