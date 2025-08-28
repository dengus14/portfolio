import axios from "axios";
import React, { useState, useEffect } from "react";


const Projects = props => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/projects')
                setProjects(response.data)
                setLoading(false)
            }catch (error) {
                console.log(error)
            }
        }
        fetchData()
     }, [])

    return (
        <div>
            {loading ? (
                <p>Loading projects...</p>
            ) : (
                projects.map(project => (
                    <div key={project._id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p>{project.techStack.join(", ")}</p>
                    </div>
                ))
            )}
        </div>
    );



}

export default Projects