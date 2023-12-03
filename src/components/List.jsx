/* eslint-disable react/prop-types */

export default function List({ todos }) {
    return todos.length
        ? <ul>
            {todos.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
        : <p>No todos available</p>
}
