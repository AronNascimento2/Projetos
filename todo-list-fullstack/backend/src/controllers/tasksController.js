const tasksModel = require("../models/tasksModel");

const getAll = async (_req, res) => {
  const tasks = await tasksModel.getAll();
  return res.status(200).json(tasks);
};

const createTask = async (request, res) => {
  const createdTask = await tasksModel.createTask(request.body);
  return res.status(201).json(createdTask);
};
const deletetask = async (request, res) => {
  const { id } = request.params;

  await tasksModel.deleteTask(id);
  return res.status(204).json();
};

const updateTask = async (request, res) => {
  const { id } = request.params;

  await tasksModel.updateTask(id, request.body);
  return res.status(204).json();
};
module.exports = {
  getAll,
  createTask,
  deletetask,
  updateTask,
};
