import { render, screen } from '@testing-library/react'
import FormInput from '../FormInput'

const mockedSetVal = jest.fn()

describe('FormInput', () => {
  it('should render text input with no input value', async () => {
    render(
      <FormInput val='' setVal={mockedSetVal} inputType='text' name='test' />
    )
    const inputElement = screen.getByTestId('form-input')
    expect(inputElement).toBeInTheDocument()
  })
  it('should be able to change input value', async () => {
    const valTest = 'testing'
    render(
      <FormInput
        val={valTest}
        setVal={mockedSetVal}
        inputType='text'
        name='test'
      />
    )
    const inputElement = screen.getByTestId('form-input')
    expect(inputElement.value).toBe(valTest)
  })
  it('should show clear input button if there is an input value', async () => {
    const valTest = 'testing'
    render(
      <FormInput
        val={valTest}
        setVal={mockedSetVal}
        inputType='text'
        name='test'
      />
    )
    const clearInputElement = screen.getByTestId('clear-input')
    expect(clearInputElement).toBeInTheDocument()
  })
  it('should not show clear input button if there is no input value', async () => {
    const valTest = ''
    render(
      <FormInput
        val={valTest}
        setVal={mockedSetVal}
        inputType='text'
        name='test'
      />
    )
    const clearInputElement = screen.queryByTestId('clear-input')
    expect(clearInputElement).not.toBeInTheDocument()
  })
})
