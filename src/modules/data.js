const Data = (() => {
  const todo = (
    title,
    desc = 'No description',
    date = new Date(),
    completed = false
  ) => {
    return {
      title,
      desc,
      date,
      completed,
    };
  };

  const project = (title, todos = []) => {
    return {
      title,
      todos,
    };
  };

  const projectList = () => ({});

  const updateLocalStorage = (myProjects) => {
    localStorage.setItem('DNtodo', JSON.stringify(myProjects));
  };

  return { project, todo, projectList, updateLocalStorage };
})();

export default Data;
