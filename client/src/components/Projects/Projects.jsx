import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../Card/Card";


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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {projects.map((project, index) => (
                        <Card
                        key={index}
                        title={project.title}
                        description={project.description}
                        techStack={project.techStack}
                        link={project.link}
                        />
                    ))}
                </div>

            )}
        </div>
    );



}

export default Projects