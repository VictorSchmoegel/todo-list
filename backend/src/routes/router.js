const express = require('express');
const router = express.Router();

const tasksMiddlewares = require('../middlewares/tasksMiddlewares');
const tasksController = require('../controllers/tasksController');

router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddlewares.validateFields, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id', tasksMiddlewares.validateFields, tasksController.updateTask);

module.exports = router;