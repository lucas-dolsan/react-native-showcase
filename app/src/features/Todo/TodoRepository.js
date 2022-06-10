import Repository from "../../commons/repository"
import sleep from '../../utils/sleep'


class TodoRepository extends Repository {
  constructor() {
    super()
  }

  async findAll() {
    await sleep(1000)

    const todos = [
      {id: 1, name: 'Todo 1', description: "Lorem ipsum"},
      {id: 2, name: 'Todo 2', description: "Lorem ipsum"},
      {id: 3, name: 'Todo 3', description: "Lorem ipsum"},
      {id: 4, name: 'Todo 4', description: "Lorem ipsum"},
    ]

    return todos;
  }
}

export default new TodoRepository()