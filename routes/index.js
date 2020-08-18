const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);

router.post('/save',homeController.createTask);

router.get('/delete',homeController.removeTask);

router.get('/mark-done',homeController.markCompletedTask);

router.get('/mark-not-done',homeController.markNotCompletedTask);

module.exports = router;
