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
    let x = document.getElementById('projects');
    let ul = document.createElement('ul');
    ul.classList.add('uk-text-normal', 'uk-list', 'uk-list-striped');
    projects.forEach(project => {
      let f = document.createElement('li');
      f.innerHTML = project;
      ul.appendChild(f);
    });

    // pList.forEach(el => {
    //   let f = document.createElement('li');
    //   f.innerHTML = el.title;
    //   ul.appendChild(f);
    // });
    // // console.log(x, ul);
    x.appendChild(ul);
  };

  const toggleForm = () => {
    let toggle = document.getElementById('toggle');
    toggle.addEventListener('click', function() {
      alert (toggle);
      // if (toggle[0].style.display === 'none') {
      //   toggle[0].style.display = 'block';
      // } else {
      //   toggle[0].style.display = 'none';
      // }
    });
  }

  return { render, renderProjects, toggleForm };
})();

const Controller = ((ui, data) => {
  let myProjects = data.projectList();
  let proj = data.project('My first project');

  myProjects[proj.title] = proj;
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
  ui.toggleForm();
  ui.render(proj);

  // Get the field input data one for the project of task

  // Add the project or task to the proper structure

  // Display the item to the UI
})(View, Data);
