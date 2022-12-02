const express = require('express');

const router = express.Router();
const {
  addTask,
  addEq,
  UserTasks,
  completeTask
} = require('../controllers/task');

router.post('/add-Task',addTask)
router.post('/add-equipment',addEq)
router.get('/display-Task/:workerid',UserTasks)
router.put('/task-done/:id',completeTask)


module.exports = router;
