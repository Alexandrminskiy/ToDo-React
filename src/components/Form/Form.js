import React, { useState, useContext } from 'react'
import { TodosHelpersContext } from '../../context/TodosContext'

let Form = ({ closeModal }) => {
  const [inputValue, setInputValue] = useState('')
  const { addToList } = useContext(TodosHelpersContext)


  const handleSumbit = (event) => {
    event.preventDefault()
    addToList(inputValue)
    setInputValue('')
    closeModal();
  }

  return (
    <form onSubmit={event => handleSumbit(event)}
      className="was-validated d-flex flex-column align-items-center">
      <div className="mb-3">
        <input
          onChange={(event) => setInputValue(event.target.value)}
          type="text"
          className="form-control"
          value={inputValue}
          name="onetodo"
          required
        />
        <div className="invalid-feedback">Форма пуста</div>
      </div>
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  )
}

Form = React.memo(Form)

export { Form }
