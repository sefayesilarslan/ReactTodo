import React from 'react'
import { useTodo } from '../context/TodoContext'

function ContentFooter() {

    const {setTodos,todos,filter,setFilter} =useTodo();

    const clearCompleted = () => {
        const cloned_todos = [...todos];
        const new_todos = cloned_todos.filter((todo)=>!todo.completed);
        setTodos(new_todos);
    }

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{todos.length} </strong>
                Görev
            </span>

            <ul className="filters">
                <li>
                    <a href="#/" onClick={()=>setFilter('all')}  className={filter==='all' ? "selected" : ""}>Hepsi</a>
                </li>
                <li>
                    <a href="#/" onClick={()=>setFilter('active')} className={filter==='active' ? "selected" : ""}>Aktif</a>
                </li>
                <li>
                    <a href="#/" onClick={()=>setFilter('completed')}  className={filter==='completed' ? "selected" : ""}>Yapılan</a>
                </li>
            </ul>

            <button className="clear-completed" onClick={clearCompleted}>
                Yapılan Görevleri Sil
            </button>
        </footer>

    )
}

export default ContentFooter