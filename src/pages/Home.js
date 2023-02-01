import React from 'react'
import HeroImage from '../assets/pizza.jpeg';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import "../styles/Home.css";

const Home = () => {
  return (
    <motion.div
        className='home'
        style={{backgroundImage: `url(${HeroImage})`}}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
    >

        <div className="homeContainer">
            <h1>React Pizzéria</h1>
            <p>A React fejlesztők kedvenc pizzáit nálunk találod!</p>
            <Link to="/menu">
                <button>Rendelés leadása</button>
            </Link>
        </div>

    </motion.div>
  )
}

export default Home