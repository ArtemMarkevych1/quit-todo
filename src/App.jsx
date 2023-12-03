import { useSelector } from 'react-redux'
import List from './components/List'
import Input from './components/Input'

function App() {
  const todos = useSelector((state) => state.todos)

  return (
    <>
      <Input />
      <List todos={todos} />
    </>
  )
}

export default App