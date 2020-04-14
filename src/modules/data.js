const Data = (() => {
  const todo = (title, desc = 'No description', date, completed, priority) => ({
    title,
    desc,
    date,
    completed,
    priority,
  });

  const project = (title, todos = []) => ({
    title,
    todos,
  });

  const projectList = () => ({});

  const updateLocalStorage = (myProjects) => {
    localStorage.setItem('DNtodo', JSON.stringify(myProjects));
  };

  return {
    project,
    todo,
    projectList,
    updateLocalStorage,
  };
})();

export default Data;
