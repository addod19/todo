import '../node_modules/uikit';
import Data from './modules/data';
import '../dist/css/main.css';

const View = (() => {
  const render = project => {
    let x = document.getElementById('list');
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
    // alert(form);
    if (form.style.display === '' || form.style.display === 'none') {
      form.style.display = 'block';
    } else {
      form.style.display = 'none';
    }
  };

  return { render, renderProjects, toggleForm };
})();

const Controller = ((ui, data) => {
  let myProjects = data.projectList();
  let proj = data.project('My first project');

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
  });

  document.getElementById('toggle').addEventListener('click', ui.toggleForm);

  // ui.toggleForm();
  ui.render(proj);

  // Get the field input data one for the project of task

  // Add the project or task to the proper structure

  // Display the item to the UI
})(View, Data);
