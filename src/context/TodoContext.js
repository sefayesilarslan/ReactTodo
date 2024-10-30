import React,{Children, createContext, useContext, useState} from "react";
import {v4 as uuid4} from "uuid";

const TodoContext =createContext();

export const TodoProvider=({children})=>{
    const [filter,setFilter]=useState('all');
    const [todos,setTodos]=useState([{

        id:1,
        gorev:'React Ögrenilecek',
        completed:true,
    },
    {
        id:2,
        gorev:'Javascript Ögrenilecek',
        completed:false,
    },

])

const addTodo=(gorev)=> setTodos((prev)=>[...prev,{id:uuid4(),completed:false,gorev}])

const toggleTodo=(id)=>{
    const cloned_todos=[...todos];
    const itemIndex=cloned_todos.findIndex((todo)=>todo.id===id);
    const item =todos[itemIndex];
    item.completed=!item.completed;

    setTodos(cloned_todos);
}

const destroyTodo=(id)=>{
    const cloned_todos=[...todos];

    const itemIndex=cloned_todos.findIndex((todo)=>todo.id===id);
    cloned_todos.splice(itemIndex,1);
    setTodos(cloned_todos);
  }

const values={
    todos,
    setTodos,
    addTodo,
    toggleTodo,
    destroyTodo,
    filter,
    setFilter
}

return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
};

export const useTodo=()=>{
    const context = useContext(TodoContext);

    if(context===undefined){
        throw new Error("Todo Hook kullanımı Todo Sağlayıcı bileşeni içinde çağrılmalıdır")
    }
    return context;
}