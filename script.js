"Use Strict";

const textArea = document.querySelector("#task-id");
const addBtn = document.querySelector("button");
const bottom = document.querySelector(".bottom");
const delet = document.querySelector(".delet");
const check = document.querySelector(".check");

//____________________________________________________
registerTasks();
function registerTasks() {
  const item = document.getElementsByClassName("item");
  const itemArr = Array.from(item);

  for (let singleitem of itemArr) {
    singleitem.addEventListener("click", checkOrDelete);
  }
}

function isTaskExist(text) {
  //conveting HTMLCollection to an Array
  const arr = Array.from(document.getElementsByClassName("task"));
  //check -> same text exixsts?
  for (const ele of arr) {
    if (ele.innerHTML === text) return true;
  }
}

function addItem() {
  const text = textArea.value;
  const html = `<div class="item">
                    <div class="check"><i class="fa fa-regular fa-circle-check"></i></div>
                    <div class="task">${text}</div>
                    <div class="delet"><i class="fa fa-solid fa-trash-can"></i></div>
                </div>`;

  if (text.length === 0) {
    alert("Please, write some task first!!!");
    return;
  }

  if (isTaskExist(text)) {
    alert("Task already exist");
    return;
  }

  bottom.insertAdjacentHTML("afterbegin", html);

  textArea.value = "";
  registerTasks();
}

function checkOrDelete(e) {
  const item = e.target.closest(".item");
  if (e.target.closest(".delet")) {
    item.remove();
  }
  if (e.target.closest(".check")) {
    item.querySelector(".task").classList.toggle("done");
    item.classList.toggle("done");
  }
}

//____________________________________________________
addBtn.addEventListener("click", addItem);
textArea.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addBtn.click();
  }
});
