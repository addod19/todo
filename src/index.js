import '../node_modules/uikit';
import Data from './modules/data';
import '../dist/css/main.css';

const View = (() => {
  const render = project => {
    // first remove the old list
    let parent = document.getElementById('list');
    let child = parent.getElementsByTagName('ul');
    parent.removeChild(child[0]);
    // then render the new one
    let x = document.getElementById('list');
    let y = document.getElementById('projects');
    let ul = document.createElement('ul');
    ul.classList.add('uk-text-normal', 'uk-list', 'uk-list-striped');

    project.todos.forEach(el => {
      let f = document.createElement('li');
      f.innerHTML = `<input class="uk-checkbox" type="checkbox"> ${el.title}<a href="" class="uk-align-right" uk-icon="icon: trash"></a>`;
      ul.appendChild(f);
    });
    x.appendChild(ul);
  };

  const renderProjects = pList => {
    let projects = Object.keys(pList);
    let x = document.getElementById('projects');
    let ul = document.createElement('ul');
    ul.classList.add('uk-text-normal', 'uk-list', 'uk-list-striped');
    projects.forEach(project => {
      let f = document.createElement('li');
      f.innerHTML = project;

      ul.appendChild(f);
    });

    x.appendChild(ul);
  };

  const toggleForm = event => {
    event.preventDefault();
    let form = document.getElementById('toggle-form');
    if (form.style.display === '' || form.style.display === 'none') {
      form.style.display = 'block';
    } else {
      form.style.display = 'none';
    }
  };

  const toggleProject = event => {
    event.preventDefault();
    let form = document.getElementById('showInput');
    if (form.style.display === '' || form.style.display === 'none') {
      form.style.display = 'block';
    } else {
      form.style.display = 'none';
    }
  };

  const readInput = () => {
    const title = document.getElementById('title');
    const desc = document.getElementById('desc');
    const date = document.getElementById('date');
    let todo = {
      title: title.value,
      desc: desc.value,
      date: date.value
    };
    return todo;
  };

  const clearInputs = () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => { input.value = ''; });
  };
  const updateStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todo));
  };

  return { render, renderProjects, toggleForm, readInput, updateStorage, clearInputs, toggleProject };
})();

const Controller = ((ui, data) => {
  let myProjects = data.projectList();
  let proj = data.project('My first project');
  let prj = data.project('Dummy project');

  myProjects[proj.title] = proj;
  ui.renderProjects(myProjects);

  const mytodos = [
    `Walk the dog`,
    `Go for our daily exercise`,
    `Garbage Out today`,
    'Wash the car',
    `Take kids to schools`
  ];

  mytodos.forEach(el => {
    let td = data.todo(el);
    proj.todos.push(td);
    localStorage.setItem('todos', JSON.stringify(td));
  });

  const getTodo = e => {
    e.preventDefault();
    let td = ui.readInput();
    proj.todos.push(td);
    ui.clearInputs;
    ui.toggleForm(event);
    ui.render(proj);
  };

  document.getElementById('toggle').addEventListener('click', ui.toggleForm);
  document.getElementById('addProject').addEventListener('click', ui.toggleProject);
  document.getElementById('submit').addEventListener('click', getTodo);

  ui.render(prj);
  ui.render(proj);

  // Get the field input data one for the project of task

  // Add the project or task to the proper structure

  // Display the item to the UI
})(View, Data);
