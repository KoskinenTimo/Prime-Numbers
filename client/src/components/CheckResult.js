import React from 'react'


const CheckResult = ({ result }) => {
  return (
    <div className="prime-results">
      <h1 className="prime-results__title">Prime check results</h1>
      <label className="prime-results__label">{result}</label>
    </div>
  )
}

export default CheckResult