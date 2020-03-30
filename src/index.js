const Data = (() => {
  const todo = (title, description, priority = 0, date = new Date(), completed = false) => {
    return {
      title,
      description,
      priority,
      date,
      completed
    }
  };

  const project = (title, todos = []) => {
    return {
      title,
      todos
    }

  };

  return { project, todo };
})();

const View = (() => {
  const render = (project) => {
    let x = document.getElementById('content');
    let ul = document.createElement('ul');
    project.todos.forEach(el => {
      let f = document.createElement('li');
      f.innerHTML = el.title;
      ul.appendChild(f);
    })
    x.appendChild(ul);
  };
  return { render }
})();


const Controller = ((ui, data) => {
  let proj = data.project('My first project');
  let mytodo = data.todo('Walk the dag', 'Go for our daily walk', 1);
  let my2nd = data.todo('Garbage', 'Take them out', 1);

  proj.todos.push(mytodo, my2nd);

  ui.render(proj);

})(View, Data);

