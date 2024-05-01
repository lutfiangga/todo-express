const listTodos = [];

const getTodo = (req, res) => {
  return res.status(200).json({ data: listTodos });
};

const createTodo = (req, res) => {
  const data = req.body;
  const id = Math.random();

  listTodos.push({
    id,
    ...data,
  });

  return res.status(200).json({ message: "Todo added success!" });
};

module.exports = {
  createTodo,
  getTodo,
};
