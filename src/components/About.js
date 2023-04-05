import React from 'react';
import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import "./About.css";

const developers = [
  {
    name: 'Lawrence Rodriques',
    image: 'https://via.placeholder.com/150',
    description: 'Full-stack developer with experience in React, Node.js, and MongoDB. Passionate about building scalable and responsive web applications.',
    github: 'https://github.com/Lawrence27R',
    instagram: 'https://instagram.com/johnsmith',
    email: 'https://www.email.com/in/johnsmith',
  },
  {
    name: 'Pratham Shah',
    image: 'https://via.placeholder.com/150',
    description: 'Full Stack Web developer with experience in React, Nodejs, and MongoDB. Enjoys solving complex problems and optimizing code for performance.',
    github: 'https://github.com/prathamshah10',
    instagram: 'https://instagram.com/bobjohnson',
    email: 'https://www.email.com/in/bobjohnson',
  },
  {
    name: 'Rajdeep Sharma',
    image: 'https://via.placeholder.com/150',
    description: 'Front-end developer with experience in React, HTML, and CSS. Loves creating beautiful and intuitive user interfaces.',
    github: 'https://github.com/Vibranium1',
    instagram: 'https://instagram.com/janedoe',
    email: 'https://www.email.com/in/janedoe',
  },
];
const About = () => (
  <div className="container mx-auto flex flex-col items-center">
    <h1 className="text-3xl font-bold mb-4">Meet the Team</h1>
    <div className="grid">
      {developers.map((developer, index) => (
        <div key={index} className="bg-white shadow rounded-lg overflow-hidden text-center w-64">
          <img src={developer.image} alt={developer.name} className="w-32 h-32 mx-auto mt-4 rounded-full object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{developer.name}</h2>
            <p className="text-gray-700 mb-4">{developer.description}</p>
            <div className="flex justify-center">
              <a href={developer.github} target="_blank" rel="noopener noreferrer" className="mx-2">
                <FaGithub size={24} />
              </a>
              <a href={developer.instagram} target="_blank" rel="noopener noreferrer" className="mx-2">
                <FaInstagram size={24} />
              </a>
              <a href={developer.email} target="_blank" rel="noopener noreferrer" className="mx-2">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default About;
