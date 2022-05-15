"use strict";

let form = document.forms["task-form"];

// Добавить участника
let addMember = document.getElementById("add-member");
let members = document.getElementById("members");
addMember.addEventListener("click", () => {
    let string = Math.random().toString(20);
    let div = document.createElement("div");
    let input = document.createElement("input");
    input.setAttribute("name", "users");
    let button = document.createElement("button");
    button.innerHTML = "x";
    div.setAttribute("id", string);
    div.appendChild(input);
    div.appendChild(button);
    members.appendChild(div);
    button.addEventListener("click", (event) => {
        div.remove();
    });
});

// Добавление задачи
function addTask() {
    let title = form.elements["title"].value;
    let description = form.elements["description"].value;
    let date = form.elements["date"].value;
    let currentDate = new Date;
    let nowDate = String(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

    let membersArr = [];
    let memberList = document.getElementsByName("users");
    for (let memb of memberList) {
        membersArr.push(memb.value);
    };

    let taskObj = {};
    taskObj["title"] = title;
    taskObj["description"] = description;
    taskObj["date"] = date;
    taskObj["memberList"] = membersArr;

    let storage = localStorage;
    let tasks = JSON.parse(storage.getItem("tasks"));
    if (!tasks) tasks = [];
    tasks.push(taskObj);
    let arrToJSON = JSON.stringify(tasks);
    storage.setItem("tasks", arrToJSON);
};

// Валидация
let nameRules = {
    elem: form.elements["title"],
    minLength: 1,
    maxLength: 20,
    errorField: document.getElementById("name-task-error"),
};

let dateRules = {
    elem: form.elements["date"],
    errorField: document.getElementById("date-error"),
};

let validator = {
    checkMinLen(rule) {
        if (rule.elem.value.length < rule.minLength || rule.elem.value.length > rule.maxLength) {
            rule.errorField.innerText = "Введите символы в количестве от " + rule.minLength + " до " + rule.maxLength;
            return false;
        }
        rule.errorField.innerText = "";
        return true;
    },
    isBefore(rule) {
        let dateTask = new Date(rule.elem.value);
        let currentDate = new Date();
        if (dateTask.getDate() < currentDate.getDate()) {
            rule.errorField.innerText = "Дата выполнения задачи не может быть раньше" + currentDate;
            return false;
        }
        rule.errorField.innerText = "";
        return true;
    }
};

form.elements.title.addEventListener("keyup", validator.checkMinLen.bind(null, nameRules));
form.elements.date.addEventListener("keyup", validator.isBefore.bind(null, dateRules));

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!validator.checkMinLen(nameRules)) {
        document.getElementById("task-error").innerText = "Данные введены некорректно";
    } else {
        document.getElementById("task-error").innerText = "";
        document.getElementById("task-done").innerText = "Задача успешно добавлена!";
        addTask();
        form.reset()
    }    
});