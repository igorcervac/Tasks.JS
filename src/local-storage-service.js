import { Service } from "./service.js";

class LocalStorageService extends Service {

    getAll(){
        return JSON.parse(localStorage.getItem('tasks') ?? '[]');
    }

    create(task){
        const tasks = JSON.parse(localStorage.getItem('tasks') ?? '[]');
        task.id = tasks.length + 1;
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    update(task) {
        const tasks = JSON.parse(localStorage.getItem('tasks') ?? '[]');
        const taskToUpdate = tasks.find(x => x.id === task.id);
        taskToUpdate.done = task.done;
        console.log(taskToUpdate);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    delete(id) {
        const tasks = JSON.parse(localStorage.getItem('tasks') ?? '[]');
        const index = tasks.findIndex(x => x.id === id);
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

export const service = new LocalStorageService();
