import SingleNumberForm from './SingleNumberForm'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'


describe('SingleNumberForm', () => {
  test('Input changes are stored and visible, no error', () => {
    const submit = jest.fn()
    render(<SingleNumberForm submit={submit}/>)
    const input = screen.getByPlaceholderText('12345')
    userEvent.type(input, '123456789')
    expect(input.value).toBe('123456789')
    expect(screen.queryByText('Correct form is \'1234\'')).toBeNull()
  })

  test('Incorrect input, error message, disppears when corrected', () => {
    const submit = jest.fn()
    render(<SingleNumberForm submit={submit}/>)
    const input = screen.getByPlaceholderText('12345')
    userEvent.type(input, 'a')
    expect(input.value).toBe('a')
    expect(screen.getByText('Correct form is \'1234\'')).toBeInTheDocument()
    userEvent.type(input, '{backspace}123')
    expect(input.value).toBe('123')
    expect(screen.queryByText('Correct form is \'1234\'')).toBeNull()
  })

  test('Clicking Reset clears input', () => {
    const submit = jest.fn()
    render(<SingleNumberForm submit={submit}/>)
    const input = screen.getByPlaceholderText('12345')
    userEvent.type(input, '1234')
    const reset = screen.getByText('Reset')
    userEvent.click(reset)
    expect(input.value).toBe('')
  })

  test('Submitting correct data calls submit', () => {
    const submit = jest.fn()
    render(<SingleNumberForm submit={submit}/>)
    const input = screen.getByPlaceholderText('12345')
    userEvent.type(input, '1234')
    const check = screen.getByText('Check')
    userEvent.click(check)
    expect(submit).toBeCalledTimes(1)
  })

  test('Submitting incorrect data doesnt call submit and show error', () => {
    const submit = jest.fn()
    render(<SingleNumberForm submit={submit}/>)
    const input = screen.getByPlaceholderText('12345')
    userEvent.type(input, 'aaa')
    const check = screen.getByText('Check')
    userEvent.click(check)
    expect(submit).toBeCalledTimes(0)
    expect(screen.getByText('Correct form is \'1234\'')).toBeInTheDocument()
  })
})

