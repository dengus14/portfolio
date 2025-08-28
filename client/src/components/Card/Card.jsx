import React from "react";

const Card = ({ title, description, techStack, link }) => {
  return (
    <div className="bg-[#0d0d0d] border border-green-500 p-6 rounded-xl 
                shadow-md hover:shadow-lg hover:shadow-green-400 
                hover:border-green-400 hover:scale-105 
                transition-all duration-300 ease-in-out cursor-pointer">

      <h2 className="text-xl font-bold text-green-400">{title}</h2>
      <p className="text-green-300 mt-2">{description}</p>

      {techStack && techStack.length > 0 && (
        <div className="mt-3">
          <h3 className="text-sm font-semibold text-green-400">Tech Stack:</h3>
          <ul className="flex flex-wrap gap-2 mt-1">
            {techStack.map((tech, index) => (
              <li
                key={index}
                className="px-2 py-1 text-xs bg-green-900 text-green-200 rounded-md border border-green-600"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      )}

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm text-green-200 underline hover:text-green-100"
        >
          View Project →
        </a>
      )}
    </div>
  );
};

export default Card;
