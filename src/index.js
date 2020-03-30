import '../node_modules/uikit';
import Data from './modules/data';

const View = (() => {
  const render = project => {
    let x = document.getElementById('content');
    let ul = document.createElement('ul');
    project.todos.forEach(el => {
      let f = document.createElement('li');
      f.innerHTML = el.title;
      ul.appendChild(f);
    });
    x.appendChild(ul);
  };

  return { render };
})();

const Controller = ((ui, data) => {
  let proj = data.project('My first project');
  let mytodo = data.todo('Walk the dag', 'Go for our daily walk', 1);
  let my2nd = data.todo('Garbage Out today', 'Take them out', 1);

  proj.todos.push(mytodo, my2nd);

  ui.render(proj);

  // Get the field input data one for the project of task

  // Add the project or task to the proper structure

  // Display the item to the UI
})(View, Data);
