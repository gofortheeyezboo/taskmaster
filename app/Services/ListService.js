import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";


class ListService{
    constructor() {
        ProxyState.on('lists', saveState)
    }
 
    create(rawList)
    {
        ProxyState.lists = [new List(rawList), ...ProxyState.lists]
    }
    
    delete(listId) {
        if(window.confirm('Click Ok to confirm deletion or Cancel to back out')){
           ProxyState.lists = ProxyState.lists.filter(p=> p.id != listId)
            ProxyState.tasks = ProxyState.tasks.filter(t=> t.listId != listId)
        }else{
            return
        }
            
    }
}

export const listService = new ListService()