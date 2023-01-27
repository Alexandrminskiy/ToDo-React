import React, { useContext } from 'react';
import { TodosHelpersContext } from '../../context/TodosContext'

let Footer = () => {
  const { deleteAll } = useContext(TodosHelpersContext)

  return (
    <footer>
      <button onClick={() => deleteAll()} type="button" className="btn btn-danger mt-5">Delete</button>
    </footer>
  )
}

Footer = React.memo(Footer)

export { Footer }
