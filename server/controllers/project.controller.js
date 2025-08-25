
const Project = require('../models/Project');

const listProjects = async (req, res) => {
  try {
    const projects = await Project.find(); 
    res.status(200).json(projects); 
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects', error });
  }
};


const getProjectById = async (req, res) => {
    const {id} = req.params;

    try{
        const project = await Project.findById(id)
        if(!project){
            return res.status(404).json({message: 'No project has been found'})
        }

        res.status(200).json(project);

    } catch(error) {
        res.status(500).json({message: 'Error fetching project by ID', error})
    }

}


const createProject = async (req, res) => {
    const { title, description, techStack } = req.body

    const project = new Project({title:title, description:description, techStack:techStack})

    try{
        const newProject = await project.save()
        return res.status(201).json(newProject)
    }catch (error) {
         console.error(error);
        res.status(500).send('Server Error');
    }
    
}

module.exports = { listProjects, getProjectById, createProject };
