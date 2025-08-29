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
                Hi, I’m Denis Gusev, a Computer Science student at the University of Wisconsin–Milwaukee 
                and aspiring Full-Stack Software Engineer. I have experience building production-ready 
                web applications through my internship at Northwestern Mutual, where I developed frontend 
                features using React, Next.js, and APIs that serve thousands of users. I enjoy working across the stack with Python, 
                JavaScript, Django, and Java, and I’m passionate about solving problems with clean, scalable code. Outside of school and 
                work, I’m always learning new technologies and improving my skills to grow as a developer.
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
