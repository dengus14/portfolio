const Project = require('./models/Project');
require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () =>{
  try {
    await mongoose.connect(process.env.MONGO_URI);
  console.log('MongoDB connected');
} catch (error) {
  console.error('MongoDB connection error:', error);
  process.exit(1);
}

}
mongoose.connection.on('connected', () => console.log('connected'));
mongoose.connection.on('disconnected', () => console.log('disconnected'));



run()

async function run() {
    await connectDB();

  const project = await Project.create({
    title: 'My First Project',
    description: 'This is a test project',
    techStack: ['Node.js', 'Express', 'MongoDB', 'React.js']
  });

  await project.save();
  console.log('Project saved:', project);

  const projects = await Project.find();
  console.log('All projects:', projects);

  mongoose.connection.close();
}


module.exports = connectDB;






