// import { v4 as uuidv4 } from "uuid";

const form = document.querySelector("form");
const boards = document.querySelectorAll(".list");

let from,
  to = undefined;

let todoList = [],
  doingList = [],
  doneList = [],
  failList = [];

const lists = {
  todo: todoList,
  doing: doingList,
  done: doneList,
  fail: failList,
};

const saveList = (listId) => {
  localStorage.setItem(listId, JSON.stringify(lists[listId]));
};

const dragstart = (e) => {
  from = e.target.parentElement.id;
  to = from;
};

const dragover = (e) => {
  const { id: targetId } = e.target;
  const listId = Object.keys(lists);

  if (listId.includes(targetId)) {
    to = targetId;
  }
};

const dragend = (e) => {
  const { id } = e.target;

  if (from === to) {
    return;
  }

  e.target.remove();
  lists[from] = lists[from].filter((todo) => {
    if (todo.id !== id) {
      return todo;
    } else {
      createElement(to, todo);
    }
  });

  saveList(from);
  saveList(to);
};

const removeTodo = (e) => {
  e.preventDefault();
  const { id } = e.target;
  const { id: listId } = e.target.parentElement;

  e.target.remove();
  lists[listId] = lists[listId].filter((todo) => {
    return todo.id !== id;
  });

  saveList(listId);
};

const createElement = (listId, todo) => {
  const list = document.querySelector(`#${listId}`);
  const item = document.createElement("div");

  item.id = todo.id;
  item.innerText = todo.text;
  item.className = "item";
  item.draggable = true;

  item.addEventListener("dragstart", dragstart);
  item.addEventListener("dragend", dragend);
  item.addEventListener("contextmenu", removeTodo);

  list.appendChild(item);
  lists[listId].push(todo);
};

const createTodo = (e) => {
  e.preventDefault();

  const input = document.querySelector("input[type='text']");

  const id = uuidv4();

  const newTodo = {
    id,
    text: input.value,
  };

  if (input.value == "") {
    alert("할 일을 입력해 주세요!");
  } else {
    createElement("todo", newTodo);
    input.value = "";
    saveList("todo");
  }
};

const loadList = () => {
  const userTodoList = Json.parse(localStorage.getItem("todo"));
  const userDoingList = Json.parse(localStorage.getItem("doing"));
  const userDoneList = Json.parse(localStorage.getItem("done"));
  const userFailList = Json.parse(localStorage.getItem("fail"));

  if (userTodoList) {
    userTodoList.forEach((todo) => {
      createElement("todo", todo);
    });
  }

  if (userDoingList) {
    userDoingList.forEach((todo) => {
      createElement("doing", todo);
    });
  }

  if (userDoneList) {
    userDoneList.forEach((todo) => {
      createElement("done", todo);
    });
  }

  if (userFailList) {
    userFailList.forEach((todo) => {
      createElement("fail", todo);
    });
  }
};

form.addEventListener("submit", createTodo);
boards.forEach((board) => {
  board.addEventListener("dragover", dragover);
});
