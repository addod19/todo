const View = (() => {
  const render = (project) => {
    // first remove the old list
    const parent = document.getElementById('list');
    const title = document.getElementById('projectName');
    title.innerHTML = project.title;
    const child = parent.getElementsByTagName('ul');
    parent.removeChild(child[0]);
    // then render the new one
    const x = document.getElementById('list');
    const ul = document.createElement('ul');
    ul.classList.add('uk-text-normal', 'uk-list', 'uk-list-striped');

    project.todos.forEach((el, i) => {
      const f = document.createElement('li');
      const input = document.createElement('input');

      const elem = document.createElement('a');
      elem.className = 'todo-text';
      el.completed
        ? elem.setAttribute('style', 'text-decoration:line-through')
        : elem.removeAttribute('style');
      elem.setAttribute('href', '#edit-modal');
      elem.setAttribute('uk-toggle', '');

      const trashBtn = document.createElement('button');
      trashBtn.className = 'uk-align-right trash';
      trashBtn.setAttribute('uk-icon', 'icon: trash');

      input.setAttribute('type', 'checkbox');
      input.classList.add('uk-checkbox');

      f.setAttribute('id', i);
      if (el.completed) input.setAttribute('checked', '');

      elem.innerHTML = ` ${el.title}`;

      const DD = document.createElement('div'); // responsive container for both description and date hence DD
      DD.className = 'uk-grid-collapse';
      DD.setAttribute('uk-grid', '');

      const description = document.createElement('p');
      description.classList.add(
        'uk-width-1-1@s',
        'uk-width-1-2@m',
        'uk-width-1-3@l',
        'uk-text-small',
        'uk-margin-right',
      );
      description.innerHTML = `${el.desc}`;

      const dueDate = document.createElement('SPAN');
      dueDate.classList.add('uk-width-1-1@s', 'uk-text-small');

      dueDate.innerText = `${el.date} - Priority: ${
        el.priority ? 'High' : 'Low'
      }`;

      DD.append(description, dueDate);
      f.append(input, elem, trashBtn, DD);
      ul.appendChild(f);
    });
    x.appendChild(ul);
  };

  const renderProjects = (pList) => {
    const parent = document.getElementById('projects');
    const child = parent.getElementsByTagName('ul');
    parent.removeChild(child[0]);
    const projects = Object.keys(pList);
    const x = document.getElementById('projects');
    const ul = document.createElement('ul');
    ul.classList.add('uk-text-normal', 'uk-list', 'uk-list-divider');
    projects.forEach((project, i) => {
      const f = document.createElement('li');
      f.className = 'user-click';
      f.setAttribute('id', `p${i}`);
      f.innerHTML = project;
      ul.appendChild(f);
    });
    x.appendChild(ul);
  };

  const highlightProj = (pid) => {
    const triangle = document.createElement('span');
    const line = document.getElementById(pid);
    line.className = 'user-click uk-text-bold';
    triangle.className = 'uk-align-right';
    triangle.setAttribute('uk-icon', 'icon: triangle-right; ratio: 1.3');
    line.appendChild(triangle);
  };

  const toggleFP = (event, id) => {
    event.preventDefault();
    const form = document.getElementById(id);
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
    const priority = document.getElementsByName('priority')[0].checked;
    clearInputs();
    return {
      title, desc, date, priority,
    };
  };

  const readProject = () => {
    const project = document.getElementById('project').value;
    clearInputs();
    return project; // not an obj only title
  };

  const readEdit = () => {
    const title = document.getElementById('edit-title').value;
    const desc = document.getElementById('edit-desc').value;
    const date = document.getElementById('edit-date').value;
    const priority = document.getElementsByName('priority')[2].checked;
    return {
      title, desc, date, priority,
    };
  };

  const fillInputs = (title, desc, date) => {
    const t = document.getElementById('edit-title');
    const d = document.getElementById('edit-desc');
    const day = document.getElementById('edit-date');
    t.value = title;
    d.value = desc;
    day.value = date;
  };

  const renderModal = () => {
    const editModal = document.createElement('DIV');
    editModal.setAttribute('id', 'edit-modal');
    editModal.setAttribute('uk-modal', '');
    editModal.classList('uk-modal');

    const ukModalDialog = document.createElement('DIV');
    ukModalDialog.setAttribute('uk-grid', '');
    ukModalDialog.classList(
      'uk-modal-dialog',
      'uk-modal-body',
      'uk-margin-auto-vertical',
      'uk-grid',
    );

    const editTitleDiv = document.createElement('DIV');
    editTitleDiv.classList('uk-width-2-5', 'uk-first-column');

    const editTitleInput = document.createElement('INPUT');
    editTitleInput.setAttribute('type', 'text');
    editTitleInput.classList('uk-input');
    editTitleInput.setAttribute('id', 'edit-title');

    editTitleDiv.appendChild(editTitleInput);

    const editDescDiv = document.createElement('DIV');
    editDescDiv.classList('uk-width-3-5');

    const editDescInput = document.createElement('INPUT');
    editDescInput.setAttribute('type', 'text');
    editDescInput.classList('uk-input');
    editDescInput.setAttribute('id', 'edit-desc');

    editDescDiv.appendChild(editDescInput);

    const DW = document.createElement('DIV');
    DW.className = 'uk-width-3-5';

    const D = document.createElement('INPUT');
    D.className = 'uk-input';
    D.setAttribute('type', 'date');
    D.setAttribute('id', 'date');

    DW.appendChild(D);

    const PW = document.createElement('DIV');
    PW.className = 'uk-width-2-5';

    const P = document.createElement('INPUT');
    P.className = 'uk-radio';
    P.setAttribute('type', 'radio');
    P.setAttribute('id', 'priority');

    PW.appendChild(P);

    const p = document.createElement('P');
    p.classList('uk-text-right');

    const b = document.createElement('BUTTON');
    b.classList('uk-button', 'uk-button-default', 'uk-modal-close');
    b.setAttribute('type', 'button');
    b.innerText = 'Cancel';

    const s = document.createElement('BUTTON');
    s.classList('uk-button', 'uk-button-primary');
    s.setAttribute('type', 'button');
    s.setAttribute('id', 'save');
    s.innerText = 'Save';

    p.append(b, s);

    editModal.append(editTitleDiv, editDescDiv, DW, PW, p);

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
