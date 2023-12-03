import { useState } from 'react'
import './App.css'
import List from './components/List'
import Input from './components/Input'

function App() {
  const [todos, setTodos] = useState([])

  const handleSubmit = (todo) => {
    setTodos([todo, ...todos])
  }

  return (
    <>
      <Input handleSubmit={handleSubmit} />
      <List todos={todos} />
    </>
  )
}

export default App