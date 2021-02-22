import ValuesController from "./Controllers/ValuesController.js";
import ListController from './Controllers/ListController.js'
import TaskController from './Controllers/TaskController.js'
import { loadState } from "./Utils/LocalStorage.js";

class App {
  // valuesController = new ValuesController();
  listController = new ListController();
  taskController = new TaskController();
}

window["app"] = new App();
loadState()