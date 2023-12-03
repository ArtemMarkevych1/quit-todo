export default function List({ todos }) {
    return todos.length
        ? <ul>
            {todos.map((todo) => <li key={todo.id}>{todo.text}</li>)}
        </ul>
        : <p>No todos available</p>
}