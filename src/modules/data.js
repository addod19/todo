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

export default Data;