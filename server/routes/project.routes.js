
const express = require('express');
const { listProjects, createProject, getProjectById } = require('../controllers/project.controller');

const router = express.Router();


router.get('/', listProjects);
router.get('/:id', getProjectById);
router.post('/', createProject);





module.exports = router;
