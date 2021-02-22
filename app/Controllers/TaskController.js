import { taskService } from "../Services/TaskService.js";
import { ProxyState } from "../AppState.js";

export default class TaskController{

    constructor() {
    }

    create(event, listId) {
    event.preventDefault()        
        let form = event.target
        let rawTask = {
            body: form.body.value,
            isChecked: false,
            listId: listId
        }
    taskService.create(rawTask)       
    }

    delete(taskId) {
        taskService.delete(taskId)
    }

}