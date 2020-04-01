const Data = (() => {
  const todo = (
    title,
    desc = 'No description',
    priority = 0,
    date = new Date(),
    completed = false
  ) => {
    return {
      title,
      desc,
      priority,
      date,
      completed
    };
  };

  const project = (title, todos = []) => {
    return {
      title,
      todos
    };
  };

  const projectList = () => ({});

  return { project, todo, projectList };
})();

export default Data;
