import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../redux/todosSlice'
import Input from './Input'

test('renders input element', () => {
  const store = configureStore({ reducer: { todos: todosReducer } })
  const { getByRole } = render(
    <Provider store={store}>
      <Input />
    </Provider>
  )
  const inputElement = getByRole('textbox')
  expect(inputElement).toBeInTheDocument()
})

test('allows entering text', () => {
  const store = configureStore({ reducer: { todos: todosReducer } })
  const { getByRole } = render(
    <Provider store={store}>
      <Input />
    </Provider>
  )
  const inputElement = getByRole('textbox')
  fireEvent.change(inputElement, { target: { value: 'Test todo' } })
  expect(inputElement.value).toBe('Test todo')
})