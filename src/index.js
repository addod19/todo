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
  let currentLine;

  ui.renderProjects(myProjects, currentProject);
  ui.highlightProj('p0');

  const exampleTodos = [
    `Click on the plus icon to add a new todo`,
    `The trash can deletes the current todo`,
    `You can mark a todo as completed`,
    'You can edit title and description by click on title',
    `Everything is saved in your computer`,
  ];

  exampleTodos.forEach((el) => {
    let td = data.todo(el);
    currentProject.todos.push(td);
    localStorage.setItem('todos', JSON.stringify(td));
  });

  const getTodo = (e) => {
    event.preventDefault();
    let td = ui.readInput();
    let newTodo = data.todo(td.title, td.desc, td.date, (td.completed = false), (td.priority = false));
    currentProject.todos.push(newTodo);
    ui.toggleFP(e, 'toggle-form');
    ui.render(currentProject);
  };

  const getProject = (e) => {
    if (e.which == 13) {
      e.preventDefault();
      let project = ui.readProject();
      let projtemp = data.project(project);
      myProjects[projtemp.title] = projtemp;
      ui.toggleFP(e, 'showInput');
      ui.renderProjects(myProjects);
      let last = Object.keys(myProjects).length;
      ui.highlightProj(`p${last - 1}`); // we want to highlight the new one
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
    if (e.target.tagName == 'A') {
      currentLine = e.target.parentElement.id;
      let title = currentProject.todos[currentLine].title;
      let desc = currentProject.todos[currentLine].desc;
      // put the data in the input fields
      ui.fillInputs(title, desc);
    }
    if (e.target.tagName == 'LI') {
      currentProject = myProjects[e.target.innerText];
      ui.renderProjects(myProjects, currentProject);
      ui.highlightProj(e.target.id);
      ui.render(currentProject);
      ui.renderModal();
    }
    if (e.target.id == 'save') {
      let td = ui.readEdit();
      let newTodo = data.todo(
        td.title,
        td.desc,
        td.date,
        (td.completed = false),
        (td.priority = false)
      );
      currentProject.todos[currentLine] = newTodo;
      UIkit.modal('#edit-modal').hide();
      localStorage.setItem('todos', JSON.stringify(td));
      ui.render(currentProject);
    }
  };

  ui.render(currentProject);
  // first render then attach Listeners
  document
    .getElementById('toggle')
    .addEventListener('click', (e) => ui.toggleFP(e, 'toggle-form'));
  document.getElementById('submit').addEventListener('click', getTodo);
  document
    .getElementById('addProject')
    .addEventListener('click', (e) => ui.toggleFP(e, 'showInput'));
  document.getElementById('project').addEventListener('keydown', getProject);
  document.getElementById('save').addEventListener('click', handleClick);
  // Try to attach eventListeners to all todos
  let todoList = document.getElementById('list');
  todoList.addEventListener('click', handleClick);
  let todoText = document.getElementsByClassName('todo-text');
  [...todoText].forEach((text) => text.addEventListener('click', handleClick));
  let projectList = document.getElementById('projects');
  projectList.addEventListener('click', handleClick);

  // Get the field input data one for the project of task

  // Add the project or task to the proper structure

  // Display the item to the UI
})(View, Data);
