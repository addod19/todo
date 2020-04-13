const View = (() => {
  const render = (project) => {
    // first remove the old list
    let parent = document.getElementById('list');
    let title = document.getElementById('projectName');
    title.innerHTML = project.title;
    let child = parent.getElementsByTagName('ul');
    parent.removeChild(child[0]);
    // then render the new one
    let x = document.getElementById('list');
    let ul = document.createElement('ul');
    ul.classList.add('uk-text-normal', 'uk-list', 'uk-list-striped');

    project.todos.forEach((el, i) => {
      let f = document.createElement('li');
      let input = document.createElement('input');

      let elem = document.createElement('a');
      elem.className = 'todo-text';
      el.completed
        ? elem.setAttribute('style', 'text-decoration:line-through')
        : elem.removeAttribute('style');
      elem.setAttribute('href', '#edit-modal');
      elem.setAttribute('uk-toggle', '');

      let trashBtn = document.createElement('button');
      trashBtn.className = 'uk-align-right trash';
      trashBtn.setAttribute('uk-icon', 'icon: trash');

      input.setAttribute('type', 'checkbox');
      input.classList.add('uk-checkbox');

      f.setAttribute('id', i);
      if (el.completed) input.setAttribute('checked', '');

      elem.innerHTML = ` ${el.title}`;
      let description = document.createElement('p');
      description.classList.add(
        'uk-width-2-2',
        'uk-text-small',
        'uk-margin-left'
      );
      description.innerHTML = `${el.desc}`;
      f.append(input, elem, trashBtn, description);
      ul.appendChild(f);
    });
    x.appendChild(ul);
  };

  const renderProjects = (pList) => {
    let parent = document.getElementById('projects');
    let child = parent.getElementsByTagName('ul');
    parent.removeChild(child[0]);
    let projects = Object.keys(pList);
    let x = document.getElementById('projects');
    let ul = document.createElement('ul');
    ul.classList.add('uk-text-normal', 'uk-list', 'uk-list-divider');
    projects.forEach((project, i) => {
      let f = document.createElement('li');
      f.className = 'user-click';
      f.setAttribute('id', `p${i}`);
      f.innerHTML = project;
      ul.appendChild(f);
    });
    x.appendChild(ul);
  };

  const highlightProj = (pid) => {
    let triangle = document.createElement('span');
    let line = document.getElementById(pid);
    line.className = 'user-click uk-text-bold';
    triangle.className = 'uk-align-right';
    triangle.setAttribute('uk-icon', 'icon: triangle-right; ratio: 1.3');
    line.appendChild(triangle);
  };

  const toggleFP = (event, id) => {
    event.preventDefault();
    let form = document.getElementById(id);
    if (form.style.display === '' || form.style.display === 'none') {
      form.style.display = 'block';
    } else {
      form.style.display = 'none';
    }
  };

  const clearInputs = () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => (input.value = ''));
  };

  const readInput = () => {
    const title = document.getElementById('title').value;
    const desc = document.getElementById('desc').value;
    const date = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;
    clearInputs();
    return { title, desc, date, priority };
  };

  const readProject = () => {
    const project = document.getElementById('project').value;
    clearInputs();
    return project; // not an obj only title
  };

  const readEdit = () => {
    const title = document.getElementById('edit-title').value;
    const desc = document.getElementById('edit-desc').value;
    const date = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;

    return { title, desc, date, priority };
  };

  const fillInputs = (title, desc) => {
    let t = document.getElementById('edit-title');
    let d = document.getElementById('edit-desc');
    t.value = title;
    d.value = desc;
  };

  const renderModal = () => {
    let editModal = document.createElement('DIV');
    editModal.setAttribute('id', 'edit-modal');
    editModal.setAttribute('uk-modal', '');
    editModal.classList('uk-modal');

    let ukModalDialog = document.createElement('DIV');
    ukModalDialog.setAttribute('uk-grid', '');
    ukModalDialog.classList('uk-modal-dialog', 'uk-modal-body', 'uk-margin-auto-vertical', 'uk-grid');

    let editTitleDiv = document.createElement('DIV');
    editTitleDiv.classList('uk-width-2-5', 'uk-first-column');

    let editTitleInput = document.createElement('INPUT');
    editTitleInput.setAttribute('type', 'text');
    editTitleInput.classList('uk-input');
    editTitleInput.setAttribute('id', 'edit-title');

    editTitleDiv.appendChild(editTitleInput);

    let editDescDiv = document.createElement('DIV');
    editDescDiv.classList('uk-width-3-5');

    let editDescInput = document.createElement('INPUT');
    editDescInput.setAttribute('type', 'text');
    editDescInput.classList('uk-input');
    editDescInput.setAttribute('id', 'edit-desc');

    editDescDiv.appendChild(editDescInput);

    let p = document.createElement('P');
    p.classList('uk-text-right');

    let b = document.createElement('BUTTON');
    b.classList('uk-button', 'uk-button-default', 'uk-modal-close');
    b.setAttribute('type', 'button');
    b.innerText = 'Cancel';

    let s = document.createElement('BUTTON');
    s.classList('uk-button', 'uk-button-primary');
    s.setAttribute('type', 'button');
    s.setAttribute('id', 'save');
    s.innerText = 'Save';

    p.append(b, s);

    editModal.append(editTitleDiv, editDescDiv, p);

    return editModal;
  };

  return {
    fillInputs,
    highlightProj,
    readEdit,
    readInput,
    readProject,
    render,
    renderProjects,
    renderModal,
    toggleFP,
  };
})();

export default View;
