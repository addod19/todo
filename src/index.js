import '../node_modules/uikit';
import '../dist/css/main.css';
import Data from './modules/data';
import View from './modules/view';

const Controller = ((ui, data) => {
  let myProjects = data.projectList();
  let proj = data.project('My first project');
  let prj = data.project('Dummy project');

  myProjects[proj.title] = proj;
  myProjects[prj.title] = prj;
  ui.renderProjects(myProjects);

  const exampleTodos = [
    `Walk the dog`,
    `Go for our daily exercise`,
    `Garbage Out today`,
    'Wash the car',
    `Take kids to schools16`
  ];

  exampleTodos.forEach(el => {
    let td = data.todo(el);
    proj.todos.push(td);
    localStorage.setItem('todos', JSON.stringify(td));
  });

  const getTodo = e => {
    let td = ui.readInput();
    let newTodo = data.todo(td.title, td.desc, td.date, (td.completed = false));
    proj.todos.push(td);
    ui.toggleForm(e);
    ui.render(proj);
  };

  const getProject = e => {
    if (e.which == 13) {
      // e.preventDefault();
      let project = ui.readProject();
      let proj = data.project(project);
      myProjects[proj.title] = proj;
      // alert(`project name ${proj}`);
      // ui.toggleProject();
      ui.toggleProject(e);
      ui.renderProjects(myProjects);
    }
  };

  const deleteTodo = e => {
    // console.log(e.target.parentElement.parentElement.id);
    let clickedLi = e.target.parentElement.parentElement.id;
    if (clickedLi >= 0) {
      proj.todos.splice(clickedLi, 1);
      ui.render(proj);
    }
  };

  const completeTodo = e => {
    let clickedLi = e.target.parentElement;
    if (proj.todos[clickedLi.id].completed) {
      proj.todos[clickedLi.id].completed = false;
    } else {
      proj.todos[clickedLi.id].completed = true;
    }
    ui.render(proj);
  };

  const handleClick = e => {
    if (e.target.parentElement.tagName == 'BUTTON') {
      deleteTodo(e);
    }
    if (e.target.type == 'checkbox') {
      completeTodo(e);
    }
  };

  ui.render(proj);

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

  // Get the field input data one for the project of task

  // Add the project or task to the proper structure

  // Display the item to the UI
})(View, Data);
