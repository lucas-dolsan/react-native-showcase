import React, { useEffect, useState } from 'react'

import TodoController from './TodoController'
import TodoTemplate from './TodoTemplate'
import { Text } from 'react-native'

function TodoPage() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    async function fetchTodos() {
      const data = await TodoController.findAll()
      setTodos(data)
    }

    fetchTodos()
  }, [])

  if(todos.length == 0) {
   return <Text>Carregando...</Text>

  }

  return (
    <TodoTemplate todos={todos} />
  )
}

export default TodoPage

/*
atomo -> ex.: label/textField 
molecula -> ex.: algo que compoe um label junto com um text field
organismo -> ex.: compoe várias moleculas/atomos
template -> ex.: compoe vários organismos/moleculas/atomos
*/