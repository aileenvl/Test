
function loadTasks(taskList){
    let container = document.getElementById('taskContainer');
    container.innerHTML='';

    taskList.forEach((task,i)=>{
        debugger;
        let divTask = document.createElement('div');
        divTask.className="taskCard";
        divTask.innerHTML = `
            ${task.img?"<img src='" + task.img + "' />":""}
            <h4> <input type="checkbox" ${task.completed?"checked":""} title="check completed">  ${task.title + ' ' + i}</h4>
            <span>created on ${moment(task.createdOn).format('MMM/DD/YYYY')} by ${task.createdBy}</span>
            <p>${task.description}</p>
            <span>Due on ${moment(task.dueDate).format('MMM/DD/YYYY')}</span>            
        `;

        if(task.completed)
            divTask.classList.add("taskCompleted");
        else if(task.dueDate < Date.now() )
            divTask.classList.add("taskLate");


        container.appendChild(divTask);
    });
}


loadTasks(taskList);


function addTask(form){
    let task = {};
    task.description=form[0].value;
    task.title = 'Task '+ taskList.length;
    task.createdBy = 'Me';
    task.dueDate=''
    task.createdOn = new Date();
    taskList.unshift(task);
    loadTasks(taskList);
}