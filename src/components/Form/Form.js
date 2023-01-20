import { useState } from 'react'

//props

const Form = ({ addToList }) => {
  const [inputValue, setInputValue] = useState('') // '' - initialValue

  console.log('Rerender Form');

  const handleSumbit = (event) => {
    event.preventDefault()

    addToList(inputValue)

    setInputValue('')
    // очистить форму
  }

  return (
    <form onSubmit={event => handleSumbit(event)} className="d-flex flex-column  align-items-center">
      <div className="mb-3">
        <input
          onChange={(event) => setInputValue(event.target.value)}
          type="text"
          className="form-control"
          value={inputValue}
          name="onetodo" />
      </div>
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  )
}

export { Form }
