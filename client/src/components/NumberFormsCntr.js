import React, { useState } from 'react'
import { getPrime, getSumAndPrime } from '../services/checksService'
import CheckResult from './CheckResult'
import ManyNumbersForm from './ManyNumbersForm'
import SingleNumberForm from './SingleNumberForm'


const NumberFormCntr = () => {
  const [ resultText, setResultText ] = useState('')

  /**
   * Data sent to api and response handled
   * @param {string} number
   */
  const submitSingleNumber = async (number) => {
    try {
      const res = await getPrime(number)
      setResultText(
        `The number ${number} ${res.data.isPrime ? 'is' : 'is not'}
        a prime number`
      )
    } catch (error) {
      handleError(error)
    }
  }

  /**
   * Data sent to api and response handled
   * @param {string} numbers
   */
  const submitMultipleNumbers = async (numbers) => {
    try {
      const res = await getSumAndPrime(numbers)
      setResultText(
        `The sum of numbers ${numbers} is ${res.data.sum} and it
        ${res.data.isPrime ? 'is' : 'is not'} a prime number`
      )
    } catch (error) {
      handleError(error)
    }
  }

  /**
   * Extract correct message to be displayed on screen
   */
  const handleError = (error) => {
    if (error.response && error.response.data && error.response.data.message) {
      setResultText(error.response.data.message)
    } else {
      setResultText(error.message)
    }
  }

  return (
    <div className="prime-check-cntr">
      <div>
        <ManyNumbersForm submit={submitMultipleNumbers}/>
        <SingleNumberForm submit={submitSingleNumber}/>
      </div>
      <CheckResult result={resultText}/>

    </div>
  )
}

export default NumberFormCntr