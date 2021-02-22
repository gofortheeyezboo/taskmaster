import { generateId } from "../Utils/GenerateId.js"
import { ProxyState } from "../AppState.js";

export default class List {
    constructor({title, body, color, id = generateId()}) {
        this.title = title
        this.body = body
        this.color = color
        this.id = id
    }

    get Template() {
        return /*html*/`
                <div class="col-6 border rounded shadow-lg custom-text ${this.color}">
                    <h1>${this.title}<button class="text-danger close mt-1"
                    onclick="app.listController.delete('${this.id}')"><span>&times;</span></button></h1>
                    <h5>List Purpose: ${this.body}</h5>
                    <h5>Tasks</h5>
                    <form onsubmit="app.taskController.create(event, '${this.id}')">
                        <div class="form-group">
                            <input required type="text" minlength='3' maxlength='50' name="body" placeholder="Name of task">
                            <button type="submit">Add Task</button>
                            </form>
                            </div>
                            <div class="row align-content-center justify-content-between">
                            <div class='col-12'>
                            ${this.Tasks}
                            </div>
                            </div>
                </div>
        `
    }

    get Tasks() {
        let template = ''
        let tasks = ProxyState.tasks.filter(t => t.listId == this.id)
        tasks.forEach(t => template += t.Template)
        return template
    }
}
