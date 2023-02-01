import React from 'react'
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import "../styles/NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <motion.div
    className='notfound'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    >
        
        <h2>A keresett oldal nem taláható!</h2>
        <Link to="/">Vissza a kezdőoldalra 🍕</Link>
        

    </motion.div>
  )
}

export default NotFoundPage