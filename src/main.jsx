import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodoProvider } from './context/TodoProvider'
import { TodoApp } from './TodoApp'








//BrowserRouter es un higher order component
//son componentes  que reciben componentes dentro de el
ReactDOM.createRoot(document.getElementById('root')).render(
    <TodoProvider>
        <TodoApp />
    </TodoProvider>
)
