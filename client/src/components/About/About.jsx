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
            I’m Denis Gusev, a Computer Science graduate from the University of
            Wisconsin–Milwaukee. What started as curiosity about how the web works
            turned into a genuine passion for building things that actually matter.
            </p>
            <p>
            During my internship at Northwestern Mutual, I built frontend features
            in React and Next.js, integrating APIs used by thousands of users. It’s
            where I learned that clean, maintainable code isn’t just a best practice
            — it’s what makes teams move fast without breaking everything.
            </p>
            <p>
            These days I build with React on the frontend and either Node.js or
            Spring Boot on the backend depending on what the project calls for.
            Outside of coding I’m either at the gym or working on cars with friends.
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
