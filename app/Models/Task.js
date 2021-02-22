import { generateId } from "../Utils/GenerateId.js";

export default class Task {
    constructor({ body, id = generateId(), listId, isChecked = false })
    {
        this.body = body
        this.id = id
        this.listId = listId
        this.isChecked = isChecked
    }

    get Template() {
        return /* html */`
            <div class='row'>
            <ul><li class=''><span class=''>${this.body}</span>
            <input type='checkbox' ${this.isChecked ? 'checked':'' } onclick="app.taskController.checkBox('${this.id}')">  
            <button type="button" class="text-danger close"
            onclick="app.taskController.delete('${this.id}')"><span>&times;</span></button></li> </ul>
            </div>
        
        `
    }
}