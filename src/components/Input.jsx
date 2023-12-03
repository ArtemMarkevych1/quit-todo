/* eslint-disable react/prop-types */
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'

export default function Input({ handleSubmit }) {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        handleSubmit({ id: uuidv4(), text: inputValue })
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