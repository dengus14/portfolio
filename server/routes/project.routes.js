
const express = require('express');
const { listProjects, createProject, getProjectById, removeProject, updateProject } = require('../controllers/project.controller');

const router = express.Router();


router.get('/', listProjects);
router.get('/:id', getProjectById);
router.post('/', createProject);
router.put('/:id', updateProject)
router.delete('/:id', removeProject)




module.exports = router;
