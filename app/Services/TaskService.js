import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js";


class TaskService{
    constructor() {
     ProxyState.on('tasks', saveState)
 }
    create(rawTask)
    {
        ProxyState.tasks = [new Task(rawTask), ...ProxyState.tasks]

    }
    
    delete(taskId) {
        if(window.confirm('Click Ok to confirm deletion or Cancel to back out')){
            ProxyState.tasks = ProxyState.tasks.filter(t=> t.id != taskId)
        }
            
        }
    checkBox(taskId){
        let checkBoxElem = document.getElementById('checkbox')
        let temp = ProxyState.tasks
        temp.forEach(task => {if(task.id == taskId){
            if(task.isChecked == false){
                task.isChecked = true
                
            }else{if(task.isChecked == true){
                task.isChecked = false
            }
            }
        }
        console.log(task.isChecked);    
        });
        
        ProxyState.tasks = temp
    }
    }

export const taskService = new TaskService()