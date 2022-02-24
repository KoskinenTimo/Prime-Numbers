import React, { useState } from 'react'


const SingleNumberForm = ({ submit }) => {
  const [ number, setNumber ] = useState('')
  const [ error, setError ] = useState('')

  const handleChange = (e) => {
    const { value } = e.target
    validateInput(value)
    setNumber(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (number === '') return
    const valid = validateInput(number)
    if (valid) {
      await submit(number)
    }
  }

  const validateInput = (value) => {
    if (value.match(/^\d*$/)) {
      setNumber(value)
      setError('')
      return true
    } else {
      setNumber(value)
      setError('Correct form is \'1234\'')
      return false
    }
  }

  /**
   * Reset input
   */
  const handleReset = (e) => {
    e.preventDefault()
    setNumber('')
    setError('')
  }

  return (
    <form onSubmit={handleSubmit} className="prime-form">
      <h1 className="prime-form__title">Check prime</h1>
      <div>
        <label className="prime-form__input-title">
          Number
        </label>
        <label className="prime-form__input-error">
          {error}
        </label>
      </div>
      <input
        className="prime-form__input"
        type="text"
        placeholder={'12345'}
        onChange={(e) => handleChange(e)}
        value={number}
      />
      <button type="submit" className="prime-form__button--submit">Check</button>
      <button
        className="prime-form__button--reset"
        onClick={(e) => handleReset(e)}
      >
        Reset
      </button>
    </form>
  )
}

export default SingleNumberForm