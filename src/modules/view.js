const View = (() => {
  const render = project => {
    // first remove the old list
    let parent = document.getElementById('list');
    let title = document.getElementById('projectName');
    title.innerHTML = project.title;
    let child = parent.getElementsByTagName('ul');
    parent.removeChild(child[0]);
    // then render the new one
    let x = document.getElementById('list');
    let y = document.getElementById('projects');
    let ul = document.createElement('ul');
    ul.classList.add('uk-text-normal', 'uk-list', 'uk-list-striped');

    project.todos.forEach((el, i) => {
      let f = document.createElement('li');
      let input = document.createElement('input');

      let elem = document.createElement('span');
      el.completed
        ? elem.setAttribute('style', 'text-decoration:line-through')
        : elem.removeAttribute('style');

      let trashBtn = document.createElement('button');
      trashBtn.className = 'uk-align-right trash';
      trashBtn.setAttribute('uk-icon', 'icon: trash');

      input.setAttribute('type', 'checkbox');
      input.classList.add('uk-checkbox');

      f.setAttribute('id', i);
      if (el.completed) input.setAttribute('checked', '');
      elem.innerHTML = ` ${el.title}`;
      f.append(input, elem, trashBtn);
      ul.appendChild(f);
      // create hidden form for each line, in a second line

      //
    });
    x.appendChild(ul);
  };

  const renderProjects = pList => {
    let parent = document.getElementById('projects');
    let child = parent.getElementsByTagName('ul');
    parent.removeChild(child[0]);
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

  const clearInputs = () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => (input.value = ''));
  };

  const readInput = () => {
    const title = document.getElementById('title').value;
    const desc = document.getElementById('desc').value;
    const date = document.getElementById('date').value;
    clearInputs();
    return { title, desc, date };
  };

  const readProject = () => {
    const project = document.getElementById('project').value;
    clearInputs();
    return project; // not an obj only title
  };

  return {
    render,
    renderProjects,
    toggleForm,
    readInput,
    readProject,
    toggleProject
  };
})();

export default View;
