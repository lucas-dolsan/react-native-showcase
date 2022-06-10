import Controller from "../../commons/controller"
import TodoRepository from "./TodoRepository"

class TodoController extends Controller {
  constructor() {
    super(TodoRepository)
  }
  onTodoClick() {
    console.warn('onTodoClick!')
  }
}

export default new TodoController()
