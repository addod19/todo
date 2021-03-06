/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import '../dist/css/main.css';
import Data from './modules/data';
import View from './modules/view';

const Controller = ((ui, data) => {
  let myProjects = data.projectList();
  let currentProject;
  let currentLine;

  if (!localStorage.getItem('DNtodo')) {
    const p1 = data.project('My first project');
    const p2 = data.project('Dummy project');
    myProjects[p1.title] = p1;
    myProjects[p2.title] = p2;
    currentProject = p1;

    const exampleTodos = [
      'Click on the plus icon to add a new todo',
      'The trash can deletes the current todo',
      'You can mark a todo as completed',
      'You can edit title and description by click on title',
      'Everything is saved in your computer',
    ];

    exampleTodos.forEach((el) => {
      const td = data.todo(el);
      currentProject.todos.push(td);

      ui.renderProjects(myProjects, currentProject);
      ui.highlightProj('p0');
    });
  } else {
    // we load the todos from localStorage
    myProjects = JSON.parse(localStorage.getItem('DNtodo'));
    currentProject = myProjects[Object.keys(myProjects)[0]];
  }

  ui.renderProjects(myProjects, currentProject);
  ui.highlightProj('p0');

  const getTodo = (e) => {
    const td = ui.readInput();
    const newTodo = data.todo(
      td.title,
      td.desc,
      td.date,
      (td.completed = false),
      td.priority,
    );
    currentProject.todos.push(newTodo);
    ui.toggleFP(e, 'toggle-form');
    ui.render(currentProject);
    data.updateLocalStorage(myProjects);
  };

  const getProject = (e) => {
    if (e.which === 13) {
      e.preventDefault();
      const project = ui.readProject();
      const projtemp = data.project(project);
      myProjects[projtemp.title] = projtemp;
      ui.toggleFP(e, 'showInput');
      ui.renderProjects(myProjects);
      const last = Object.keys(myProjects).length;
      ui.highlightProj(`p${last - 1}`);
      data.updateLocalStorage(myProjects);
      currentProject = myProjects[projtemp.title];
      ui.render(currentProject);
    }
  };

  const deleteTodo = (e) => {
    const clickedLi = e.target.parentElement.parentElement.id;
    if (clickedLi >= 0) {
      currentProject.todos.splice(clickedLi, 1);
      ui.render(currentProject);
    }
  };

  const completeTodo = (e) => {
    // event.preventDefault();
    const clickedLi = e.target.parentElement;
    if (currentProject.todos[clickedLi.id].completed) {
      currentProject.todos[clickedLi.id].completed = false;
    } else {
      currentProject.todos[clickedLi.id].completed = true;
    }
    ui.render(currentProject);
  };

  const handleClick = (e) => {
    if (e.target.parentElement.tagName === 'BUTTON') {
      deleteTodo(e);
    }
    if (e.target.type === 'checkbox') {
      completeTodo(e);
    }
    if (e.target.tagName === 'A') {
      currentLine = e.target.parentElement.id;
      const { title } = currentProject.todos[currentLine];
      const { desc } = currentProject.todos[currentLine];
      const { date } = currentProject.todos[currentLine];
      // put the data in the input fields
      ui.fillInputs(title, desc, date);
    }
    if (e.target.tagName === 'LI') {
      currentProject = myProjects[e.target.innerText];
      ui.renderProjects(myProjects, currentProject);
      ui.highlightProj(e.target.id);
      ui.render(currentProject);
    }
    if (e.target.id === 'save') {
      const td = ui.readEdit();
      const newTodo = data.todo(
        td.title,
        td.desc,
        td.date,
        (td.completed = false),
        td.priority,
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
    .addEventListener('click', e => ui.toggleFP(e, 'toggle-form'));
  document.getElementById('submit').addEventListener('click', getTodo);
  document
    .getElementById('addProject')
    .addEventListener('click', e => ui.toggleFP(e, 'showInput'));
  document.getElementById('project').addEventListener('keydown', getProject);
  document.getElementById('save').addEventListener('click', handleClick);
  // Try to attach eventListeners to all todos
  const todoList = document.getElementById('list');
  todoList.addEventListener('click', handleClick);
  const todoText = document.getElementsByClassName('todo-text');
  [...todoText].forEach(text => text.addEventListener('click', handleClick));
  const projectList = document.getElementById('projects');
  projectList.addEventListener('click', handleClick);

  // Get the field input data one for the project of task

  // Add the project or task to the proper structure

  // Display the item to the UI
})(View, Data);
