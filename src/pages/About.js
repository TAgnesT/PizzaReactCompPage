import React from 'react';
import AboutImage from '../assets/multiplePizzas.jpeg';
import {motion} from 'framer-motion';
import "../styles/About.css";

const About = () => {
  return (
    <motion.div
        className='about'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
    >

        <div className="aboutTop" style={{backgroundImage: `url(${AboutImage})`}}></div>
        <div className="aboutContainer">
            <h2>Rólunk</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt est beatae, eaque distinctio soluta ullam? Modi magni necessitatibus quos ab maxime officia nesciunt natus doloribus, molestias alias laborum corrupti? Cumque eveniet voluptatum incidunt voluptas ex corrupti deserunt sequi quia quisquam, totam, assumenda provident iure nostrum ipsam? Unde sapiente veniam nostrum.</p>
        </div>
    </motion.div>
  )
}

export default About