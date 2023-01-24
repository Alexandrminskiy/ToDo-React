import { useState } from 'react'

//props

const Form = ({ addToList }) => {
  const [inputValue, setInputValue] = useState('') // '' - initialValue
  // const [feedback, setFeedback] = useState(false)

  const handleSumbit = (event) => {
    event.preventDefault()

    // if (!inputValue) {
    // setFeedback('Форма пуста')
    // }

    addToList(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={event => handleSumbit(event)} className=" was-validated d-flex flex-column  align-items-center">
      <div className="mb-3">
        <input
          onChange={(event) => setInputValue(event.target.value)}
          type="text"
          className="form-control"
          value={inputValue}
          name="onetodo"
          required
        />
        <div class="invalid-feedback">Форма пуста</div>
      </div>
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  )
}

export { Form }
