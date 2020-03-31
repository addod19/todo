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
      f.innerHTML = el.title;
      ul.appendChild(f);
    });
    console.log(x, ul);
    // x.appendChild(ul)
    x.appendChild(ul);
  };

  return { render };
})();

const Controller = ((ui, data) => {
  let proj = data.project('My first project');

  const mytodos = [
    'Walk the dog',
    'Go for our daily exercise',
    'Garbage Out today',
    'Wash the car',
    'Take kids to school',
    'Talk to Daniel about the design'
  ];

  mytodos.forEach(el => {
    let td = data.todo(el);
    proj.todos.push(td);
  });

  // proj.todos.push(...mytodos);

  ui.render(proj);

  // Get the field input data one for the project of task

  // Add the project or task to the proper structure

  // Display the item to the UI
})(View, Data);
