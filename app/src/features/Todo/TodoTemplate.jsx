import React from 'react';

import Todo from "./components/Todo"
import FlatList from '../../components/containers/FlatList'

function TodoTemplate({ todos }) {
  return (
    <FlatList 
      keyExtractor={item => item.id}
      data={todos}
      renderItem={({item}) => <Todo {...item} />}
    />
  )
}


export default TodoTemplate