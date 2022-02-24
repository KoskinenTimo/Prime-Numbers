import ManyNumbersForm from './ManyNumbersForm'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'


describe('ManyNumbersForm', () => {
  test('Input changes are stored and visible, no error', () => {
    const submit = jest.fn()
    render(<ManyNumbersForm submit={submit}/>)
    const input = screen.getByPlaceholderText('1,2,3,4,5')
    userEvent.type(input, '1,2,3,4,5,6,7,8,9')
    expect(input.value).toBe('1,2,3,4,5,6,7,8,9')
    expect(screen.queryByText('Correct form is \'1,2,3,4\'')).toBeNull()
  })

  test('Incorrect input, error message, disppears when corrected', () => {
    const submit = jest.fn()
    render(<ManyNumbersForm submit={submit}/>)
    const input = screen.getByPlaceholderText('1,2,3,4,5')
    userEvent.type(input, '1,')
    expect(input.value).toBe('1,')
    expect(screen.getByText('Correct form is \'1,2,3,4\'')).toBeInTheDocument()
    userEvent.type(input, '2')
    expect(input.value).toBe('1,2')
    expect(screen.queryByText('Correct form is \'1,2,3,4\'')).toBeNull()
  })

  test('Clicking Reset clears input', () => {
    const submit = jest.fn()
    render(<ManyNumbersForm submit={submit}/>)
    const input = screen.getByPlaceholderText('1,2,3,4,5')
    userEvent.type(input, '1,2,3,4')
    const reset = screen.getByText('Reset')
    userEvent.click(reset)
    expect(input.value).toBe('')
  })

  test('Submitting correct data calls submit', () => {
    const submit = jest.fn()
    render(<ManyNumbersForm submit={submit}/>)
    const input = screen.getByPlaceholderText('1,2,3,4,5')
    userEvent.type(input, '1,2,3,4')
    const check = screen.getByText('Check')
    userEvent.click(check)
    expect(submit).toBeCalledTimes(1)
  })

  test('Submitting incorrect data doesnt call submit and show error', () => {
    const submit = jest.fn()
    render(<ManyNumbersForm submit={submit}/>)
    const input = screen.getByPlaceholderText('1,2,3,4,5')
    userEvent.type(input, 'aaa')
    const check = screen.getByText('Check')
    userEvent.click(check)
    expect(submit).toBeCalledTimes(0)
    expect(screen.getByText('Correct form is \'1,2,3,4\'')).toBeInTheDocument()
  })
})

