import '../node_modules/uikit';
import '../dist/css/main.css';
import Data from './modules/data';
import View from './modules/view';

const Controller = ((ui, data) => {
  let myProjects = data.projectList();
  let p1 = data.project('My first project');
  let p2 = data.project('Dummy project');

  myProjects[p1.title] = p1;
  myProjects[p2.title] = p2;

  let currentProject = p1;
  ui.renderProjects(myProjects);

  const exampleTodos = [
    `Walk the dog`,
    `Go for our daily exercise`,
    `Garbage Out today`,
    'Wash the car',
    `Take kids to schools22`,
  ];

  exampleTodos.forEach((el) => {
    let td = data.todo(el);
    currentProject.todos.push(td);
    localStorage.setItem('todos', JSON.stringify(td));
  });

  const getTodo = (e) => {
    event.preventDefault();
    let td = ui.readInput();
    let newTodo = data.todo(td.title, td.desc, td.date, (td.completed = false));
    currentProject.todos.push(newTodo);
    ui.toggleForm(e);
    ui.render(currentProject);
  };

  const getProject = (e) => {
    if (e.which == 13) {
      e.preventDefault();
      let project = ui.readProject();
      let projtemp = data.project(project);
      myProjects[projtemp.title] = projtemp;
      // alert(`project name ${proj}`);
      ui.toggleProject(e);
      ui.renderProjects(myProjects);
    }
  };

  const deleteTodo = (e) => {
    let clickedLi = e.target.parentElement.parentElement.id;
    if (clickedLi >= 0) {
      currentProject.todos.splice(clickedLi, 1);
      ui.render(currentProject);
    }
  };

  const completeTodo = (e) => {
    event.preventDefault();
    let clickedLi = e.target.parentElement;
    if (currentProject.todos[clickedLi.id].completed) {
      currentProject.todos[clickedLi.id].completed = false;
    } else {
      currentProject.todos[clickedLi.id].completed = true;
    }
    ui.render(currentProject);
  };

  const handleClick = (e) => {
    if (e.target.parentElement.tagName == 'BUTTON') {
      deleteTodo(e);
    }
    if (e.target.type == 'checkbox') {
      completeTodo(e);
    }
    if (e.target.tagName == 'LI') {
      currentProject = myProjects[e.target.innerText];
      ui.render(currentProject);
    }
  };

  ui.render(currentProject);
  // first render then attach Listeners
  document.getElementById('toggle').addEventListener('click', ui.toggleForm);
  document.getElementById('submit').addEventListener('click', getTodo);
  document
    .getElementById('addProject')
    .addEventListener('click', ui.toggleProject);
  document.getElementById('project').addEventListener('keydown', getProject);

  // Try to attach eventListeners to all todos
  let todoList = document.getElementById('list');
  todoList.addEventListener('click', handleClick);
  let projectList = document.getElementById('projects');
  projectList.addEventListener('click', handleClick);

  // Get the field input data one for the project of task

  // Add the project or task to the proper structure

  // Display the item to the UI
})(View, Data);
