import { listService } from "../Services/ListService.js";
import { ProxyState } from "../AppState.js";


function _draw() {
    let listElem = document.getElementById("list")
    let template = ""
    ProxyState.lists.forEach(l => template += l.Template)
    listElem.innerHTML = template
}


export default class ListController{

    constructor() {
        ProxyState.on("lists", _draw)
        ProxyState.on("tasks", _draw)
    }

    create(event) {
    event.preventDefault()        
        let form = event.target
        let rawList = {
            title: form.title.value,
            body: form.body.value
        }
    listService.create(rawList)       
    }

    delete(listId) {
        listService.delete(listId)
    }
}