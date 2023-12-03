// src/components/Input.jsx
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todosSlice'

export default function Input() {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo({ id: uuidv4(), text: inputValue }))
        setInputValue("")
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handleChange}
            />

            <button type="submit">
                Add todo
            </button>
        </form>
    )
}