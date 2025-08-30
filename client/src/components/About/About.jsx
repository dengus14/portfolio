import React from "react";
import languages from "../../constants/languages";
import './About.css';

const About = () => {
    const radius = 160; 
    const containerSize = 300; 

    return (
        <div className="about-container">
            <h2>About Me</h2>
            <p>
            I’m Denis Gusev, currently studying Computer Science at the University of 
            Wisconsin–Milwaukee. My journey into software started with curiosity about 
            how the web works, and has grown into a passion for building real-world 
            solutions with code.
            </p>
            <p>
            During my internship at Northwestern Mutual, I worked on frontend features 
            in React and Next.js, integrating APIs that impact thousands of users. That 
            experience taught me the importance of writing clean, maintainable code and 
            collaborating with other engineers.
            </p>
            <p>
            Beyond academics and work, I’m always exploring new technologies — from 
            backend frameworks like Django and Node.js to experimenting with deployment 
            pipelines. When I am not coding, I am going to the gym or working on cars with friens.
            </p>


            <div 
                className="circle-container"
                style={{ width: `${containerSize}px`, height: `${containerSize}px` }}
            >
                {languages.map((lang, index) => {
                    const angle = (index / languages.length) * 2 * Math.PI; 
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);

                    return (
                        <img
                            key={lang.name}
                            src={lang.image}
                            alt={lang.name}
                            className="circle-item"
                            style={{
                                left: `${containerSize / 2 + x - 25}px`, 
                                top: `${containerSize / 2 + y - 25}px`,  
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default About;
