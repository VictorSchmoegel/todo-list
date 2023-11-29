const pool = require('./connection');

const getAll = async () => {
  const [tasks] = await pool.execute('SELECT * FROM tasks');
  return tasks;
};

const createTask = async (task) => {
  const { title } = task;
  const dateUTC = new Date(Date.now()).toUTCString();
  const query = 'INSERT INTO tasks (title, status, created_at) VALUES (?, ?, ?)';
  const [createdTask] = await pool.execute(query, [title, 'pendente', dateUTC]);
  return { insertId: createdTask.insertId };
};

const deleteTask = async (id) => {
  const query = 'DELETE FROM tasks WHERE id = ?';
  const [deletedTask] = await pool.execute(query, [id]);
  return deletedTask;
};

const updateTask = async (id, task) => {
  const { title, status } = task;
  const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';
  const [updatedTask] = await pool.execute(query, [title, status, id]);
  return updatedTask;
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask,
};