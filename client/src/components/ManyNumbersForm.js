import React, { useState } from 'react'

const ManyNumbersForm = ({ submit }) => {
  const [ numbers, setNumbers ] = useState('')
  const [ error, setError ] = useState('')

  const handleChange = (e) => {
    const { value } = e.target
    validateInput(value)
    setNumbers(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (numbers === '') return
    const valid = validateInput(numbers)
    if (valid) {
      await submit(numbers)
    }
  }

  const validateInput = (value) => {
    if (value.match(/^(\d+(,\d+)*)*$/)) {
      setNumbers(value)
      setError('')
      return true
    } else {
      setNumbers(value)
      setError('Correct form is \'1,2,3,4\'')
      return false
    }
  }

  /**
   * Reset input
   */
  const handleReset = (e) => {
    e.preventDefault()
    setNumbers('')
    setError('')
  }

  return (
    <form onSubmit={handleSubmit} className="prime-form">
      <h1 className="prime-form__title">Check sum and prime</h1>
      <div>
        <label className="prime-form__input-title">
          Numbers
        </label>
        <label className="prime-form__input-error">
          {error}
        </label>
      </div>

      <input
        className="prime-form__input"
        type="text"
        placeholder="1,2,3,4,5"
        onChange={(e) => handleChange(e)}
        value={numbers}
      />
      <button
        type="submit"
        className="prime-form__button--submit"
      >
        Check
      </button>
      <button
        className="prime-form__button--reset"
        onClick={(e) => handleReset(e)}
      >Reset</button>
    </form>
  )
}

export default ManyNumbersForm