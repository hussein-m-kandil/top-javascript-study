import "./index.css";

import { isEqual, isAfter, addHours } from "date-fns";
import createElement from "./helpers/createElement.js";
import TodoListEvents from "./helpers/TodoListEvents.js";
import DeleteTodoForm from "./components/DeleteTodoForm";
import DropDownMenu from "./components/DropDownMenu";
import TodoForm from "./components/TodoForm";
import TodoCard from "./components/TodoCard";
import Button from "./components/Button";

const STORAGE_KEY_NAME = "todo-info-list";

const generateId = () => {
  return `${Math.random()}${new Date().getTime()}`.slice(2);
};

let projects = ["Default 1", "Default 2"],
  currentProject = projects[0],
  todoInfoList = [],
  todoSamples = false,
  formPresented = false,
  todoToEdit = null,
  todoToDelete = null;

// Header
const header = createElement("header", "todo-header");
const pageTitle = createElement("h1", "todo-head", "Odin Todo List");
const controls = createElement("div", "todo-controls");
const newTodoButton = Button({
  className: "new-todo",
  type: "button",
  textContent: "New Todo",
});
newTodoButton.addEventListener("click", () => {
  if (!formPresented) {
    showTodoForm();
  } else {
    removeTodoForm();
  }
});
const projectsMenu = DropDownMenu(
  projects,
  (selectedProject) => {
    TodoListEvents.emit(TodoListEvents.PROJECT_CHANGED, selectedProject);
  },
  "projects-menu",
  "Project: "
);
const newProjectButton = Button({
  className: "new-project",
  type: "button",
  textContent: "New Project",
});
newProjectButton.addEventListener("click", () => {
  // TODO:
  console.log("Needs logic for adding new project!");
});
controls.append(newTodoButton, projectsMenu, newProjectButton);
header.append(pageTitle, controls);

// Main
const main = createElement("main");

// Listen to todo list events
TodoListEvents.add(TodoListEvents.CREATE_NEW_TODO, (todoInfo) => {
  // Remove sample todos if it is the first todo
  if (todoSamples) {
    todoInfoList.splice(0, todoInfoList.length);
    todoSamples = false;
  }
  todoInfo.id = generateId();
  todoInfoList.push(todoInfo);
  // Sort the todos based on dueDate
  todoInfoList.sort((a, b) => {
    if (isEqual(a.dueDate, b.dueDate)) {
      return 0;
    } else if (isAfter(a.dueDate, b.dueDate)) {
      return 1;
    } else {
      return -1;
    }
  });
  removeTodoForm();
});
TodoListEvents.add(TodoListEvents.EDIT_TODO, (todoId) => {
  showTodoForm(todoId);
});
TodoListEvents.add(TodoListEvents.TODO_EDITED, (todoInfo) => {
  // Use todoToEdit global variable to update the todo with edits, then, reset it.
  if (todoToEdit && todoToEdit.id === todoInfo.id) {
    Object.assign(todoToEdit, todoInfo);
  } else {
    throw Error("Todo edit cannot be confirmed!");
  }
  todoToEdit = null;
  removeTodoForm();
});
TodoListEvents.add(TodoListEvents.DELETE_TODO, (todoId) => {
  // Show delete confirmation form.
  showDeleteTodoForm(todoId);
});
TodoListEvents.add(TodoListEvents.CONFIRM_DELETE_TODO, () => {
  // Use the global variable 'todoToDelete' to delete the todo from the list.
  if (todoToDelete) {
    todoInfoList.splice(todoInfoList.indexOf(todoToDelete), 1);
  } else {
    throw Error("Todo delete cannot be confirmed!");
  }
  // Reset the global variable 'todoToDelete'
  todoToDelete = null;
  removeTodoForm();
});
TodoListEvents.add(TodoListEvents.CANCEL_DELETE_TODO, () => {
  todoToDelete = null;
  removeTodoForm();
});
TodoListEvents.add(TodoListEvents.PROJECT_CHANGED, (selectedProject) => {
  if (projects.includes(selectedProject)) {
    currentProject = selectedProject;
    emptyMain();
    showTodos();
  }
});

// Local storage logic
if (localStorage) {
  // Get stored data
  let storedTodoInfoList = localStorage.getItem(STORAGE_KEY_NAME);
  if (storedTodoInfoList) {
    storedTodoInfoList = JSON.parse(storedTodoInfoList, (key, value) => {
      if (key === "dueDate") {
        return new Date(value);
      }
      return value;
    });
    if (storedTodoInfoList.length > 0) {
      todoInfoList = storedTodoInfoList;
    } else {
      todoInfoList = getTodoSamples();
      todoSamples = true;
    }
  } else {
    todoInfoList = getTodoSamples();
    todoSamples = true;
  }
  showTodos();
  // Store data
  document.defaultView.addEventListener("beforeunload", () => {
    if (!todoSamples) {
      localStorage.setItem(STORAGE_KEY_NAME, JSON.stringify(todoInfoList));
    }
  });
} else {
  todoInfoList = getTodoSamples();
  todoSamples = true;
  showTodos();
}

// Show result, then, Calculate main's top margin because header is fixed.
document.body.append(header, main);
main.setAttribute(
  "style",
  `margin-top: calc(${header.offsetHeight}px + 1rem);`
);

// Manipulate main content
function emptyMain() {
  [...main.children].forEach((node) => main.removeChild(node));
}

function showTodos() {
  todoInfoList
    .filter((todoInfo) => todoInfo.project === currentProject)
    .forEach((todoInfo) => main.appendChild(TodoCard(todoInfo)));
}

function showTodoForm(todoId) {
  emptyMain();
  // If todoId, so we need to assign the todo that has this id to the global variable todoToEdit
  // then, give it to the form to be edit-todo form instead of create-new-todo form
  if (todoId) {
    for (let i = 0; i < todoInfoList.length; i++) {
      if (todoInfoList[i].id === todoId) {
        todoToEdit = todoInfoList[i];
        main.appendChild(TodoForm(todoToEdit));
        break;
      }
    }
    if (!todoToEdit) {
      main.appendChild(TodoForm());
    }
  } else {
    main.appendChild(TodoForm());
  }
  newTodoButton.textContent = "Home";
  formPresented = true;
}

function showDeleteTodoForm(todoId) {
  // Find the todo and assign it to the global variable 'todoToDelete'
  if (todoId) {
    for (let i = 0; i < todoInfoList.length; i++) {
      if (todoInfoList[i].id === todoId) {
        todoToDelete = todoInfoList[i];
        break;
      }
    }
  }
  if (todoToDelete) {
    // Create new confirm delete todo form
    emptyMain();
    main.append(TodoCard(todoToDelete, true), DeleteTodoForm(todoToDelete));
    newTodoButton.textContent = "Home";
    formPresented = true;
  } else {
    throw Error("Cannot find a todo to delete!");
  }
}

function removeTodoForm() {
  emptyMain();
  showTodos();
  formPresented = false;
  newTodoButton.textContent = "New Todo";
}

function getTodoSamples() {
  return [
    {
      id: generateId(),
      project: projects[0],
      title: "Todo Sample #1",
      description: "Sed consectetur adipiscing elit, sed do eiusmod.",
      dueDate: addHours(new Date(), 2),
      priority: "high",
    },
    {
      id: generateId(),
      project: projects[0],
      title: "Todo Sample #2",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." +
        " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      dueDate: addHours(new Date(), 4),
      priority: "medium",
    },
    {
      id: generateId(),
      project: projects[0],
      title: "Todo Sample #3",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      dueDate: addHours(new Date(), 6),
      priority: "low",
    },
    {
      id: generateId(),
      project: projects[1],
      title: "Todo Sample #4",
      description: "Sed consectetur adipiscing elit, sed do eiusmod.",
      dueDate: addHours(new Date(), 2),
      priority: "high",
    },
    {
      id: generateId(),
      project: projects[1],
      title: "Todo Sample #5",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      dueDate: addHours(new Date(), 4),
      priority: "low",
    },
  ];
}
