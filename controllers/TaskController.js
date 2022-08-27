import Task from "../models/Task.js";

const createTask = async (req, res) => {
  try {
    const { task } = req.body
    if (!task) throw { code: '400', message: 'TASK_CANNOT_BE_NULL' }

    const newTask = new Task({
      task: req.body.task,
    });

    const data = await newTask.save();

    res.status(201).json({
      status: true,
      message: "TASK_CREATE_SUCCESS",
      data
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export { createTask };
