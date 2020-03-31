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
    // console.log(x, ul);
    x.appendChild(ul);
  };

  const renderProjects = pList => {
    let projects = Object.keys(pList);
    console.log(projects);
    // let x = document.getElementById('projects');
    // let ul = document.createElement('ul');
    // ul.classList.add('uk-text-normal', 'uk-list', 'uk-list-striped');
    // for (let project in pList) {
    //   let f = document.createElement('li');
    //   f.innerHTML = project;
    //   project.
    // }
    // pList.forEach(el => {
    //   let f = document.createElement('li');
    //   f.innerHTML = el.title;
    //   ul.appendChild(f);
    // });
    // // console.log(x, ul);
    // x.appendChild(ul);
  };

  return { render, renderProjects };
})();

const Controller = ((ui, data) => {
  let myProjects = data.projectList();
  console.log(myProjects);
  let proj = data.project('My first project');
  // console.log(proj);
  myProjects[proj.title] = proj.title;

  ui.renderProjects(myProjects);

  const mytodos = [
    `<input class="uk-checkbox" type="checkbox"> Walk the dog <a href="" class="uk-align-right" uk-icon="icon: trash"></a>`,
    `<input class="uk-checkbox" type="checkbox"> Go for our daily exercise <a href="" class="uk-align-right" uk-icon="icon: trash"></a>`,
    `<input class="uk-checkbox" type="checkbox"></span> Garbage Out today <a href="" class="uk-align-right" uk-icon="icon: trash"></a>`,
    '<input class="uk-checkbox" type="checkbox"> Wash the car <a href="" class="uk-align-right" uk-icon="icon: trash"></a>',
    `<input class="uk-checkbox" type="checkbox"> Take kids to schools <a href="" class="uk-align-right" uk-icon="icon: trash"></a>`
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
