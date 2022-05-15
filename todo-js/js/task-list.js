"use strict";

let storage = localStorage;
let tasksStorage = JSON.parse(storage.getItem("tasks"));
if(!tasksStorage || tasksStorage.length === 0) {
    document.getElementById("zero-tasks").innerHTML = `<p> Список задач пуст <p>`;
};

let sort = tasksStorage.sort(function(a, b) {
    if(a.date < b.date) return -1;
    if(a.date > b.date) return 1;
    return 0;
});

storage.setItem("tasks", JSON.stringify(sort));

function getDate(someDate) {
    let currentDate = new Date(someDate);
    return `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;
};

for(let tasks of tasksStorage) {
    let taskList = document.createElement("div");
    taskList.classList.add("taskList");
    let titleList = document.createElement("h2");
    titleList.innerText = `Название: ${tasks.title}`;
    let descriptionList = document.createElement("p");
    descriptionList.innerText = `Описание: ${tasks.description}`;
    let membersList = document.createElement("span");
    membersList.innerText = `Участники: ${tasks.memberList}`;
    let dateList = document.createElement("span");
    dateList.innerHTML = `<p>Срок выполнения: <p>${getDate(tasks.date)}`;
    
    let section = document.getElementById("task-list");

    section.append(taskList);
    taskList.append(titleList, descriptionList, membersList, dateList);

    taskList.addEventListener("click", function(){
        if(this.classList.contains("active")){
            this.classList.remove("active");
        } else {
            this.classList.add("active");
        }

        let button = document.getElementById("delite");
        button.addEventListener("click", deliteTask.bind(this));
        function deliteTask(event){
            event.preventDefault();
            this.remove(this);

            sort.splice(tasks, 1);
            localStorage.setItem("tasks", JSON.stringify(sort));
        }
    });
}
