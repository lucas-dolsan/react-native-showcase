import React from 'react';

import { HContainer } from "../../../components/containers/BaseContainer";
import { Text } from '../../../components/typography/Text';
import { Button } from '../../../components/buttons/button/Button'
import spacings from '../../../styles/spacings'
import TodoController from '../TodoController'

function Todo({ id, name, description }) {
  const titleText = `${id} - ${name}:`
  const descriptionText = description

  return (
    <TodoContainer>
      <Text> {titleText} </Text>
      <Text> {descriptionText} </Text>
      <TodoButton />
    </TodoContainer>
  )
}

function TodoButton(props) {
  return (
    <Button {...props} onClick={TodoController.onTodoClick}>
      <Text>button</Text>
    </Button>
  )
}

function TodoContainer(props) {
  return (
    <HContainer {...props} style={{flex: 1, padding: spacings.large }} />
  )
}

export default Todo;