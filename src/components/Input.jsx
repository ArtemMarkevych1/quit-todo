import React from "react"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todosSlice'
import { Input as AntInput, Button } from 'antd'

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
            <AntInput
                type='text'
                value={inputValue}
                onChange={handleChange}
            />

            <Button type="primary" htmlType="submit">
                Add todo
            </Button>
        </form>
    )
}