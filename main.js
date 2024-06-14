class Tasks{
    constructor(){
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }
    Create(name, description){
        const task =
        {
            name: name,
            description: description,
            dateCreate: new Date(),
            dateEdit: new Date(),
            completed: false
        }
        this.tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
    Delete(index){
        this.tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    Edit(index, edit, completed){
        edit.dateEdit = new Date();
        if (completed === 'Сделано') { edit.completed = true}
        this.tasks[index] = edit;
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    ReadElement(index){
        return this.tasks[index]
    }

    ReadList(){
        return this.tasks
    }

    ReadFilltredList(completed){
        if (completed === 'Сделано'){ this.tasks.filter(task => task.completed === (completed === true));}
        else if (completed === 'Не сделано'){this.tasks.filter(task => task.completed === (completed === false));}
        else {this.tasks}
    }

    ClearTasks(){
        localStorage.clear()
    }
}
console.log('привет!')
const taskManager = new Tasks();
taskManager.ClearTasks();
taskManager.Create('Машина', 'Помыть машину, поменять масло')
taskManager.Create('Собака', 'Сводить в ветлечебницу')
taskManager.Create('Магазин', 'Купить мыло')
console.log(taskManager.ReadList())
taskManager.Edit(0, {description: 'Помыть машину'}, 'Сделано')
console.log(taskManager.ReadElement(0))
taskManager.Delete(2)
console.log(taskManager.ReadList())
console.log(taskManager.ReadFilltredList('Не сделано'))
console.log(taskManager.ReadFilltredList('Сделано'))
console.log(taskManager.ReadFilltredList(''))