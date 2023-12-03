import React from "react"
import { List, Typography, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../redux/todosSlice'

export default function TodoList({ todos }) {
    const dispatch = useDispatch()

    if (!todos) {
        return null; 
    }

    return todos.length
        ? <List
            size="large"
            bordered
            dataSource={todos}
            renderItem={todo => (
                <List.Item key={todo.id}>
                    <Typography.Text>{todo.text}</Typography.Text>
                    <Button type="primary" danger onClick={() => dispatch(deleteTodo(todo.id))}>
                        Delete
                    </Button>
                </List.Item>
            )}
          />
        : <Typography.Text type="secondary">No todos available</Typography.Text>
}