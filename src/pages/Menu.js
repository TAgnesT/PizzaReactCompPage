import React from 'react'
import {PizzaList} from '../PizzaList'
import PizzaItem from '../components/PizzaItem';
import {motion} from 'framer-motion';
import "../styles/Menu.css";

const Menu = () => {
  return (
    <motion.div
      className='menu'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >

      <div className="menuTitle">Pizzáink</div>
      <div className="menuList">
        {
          PizzaList.map(pizza => {

            return <PizzaItem name={pizza.name} image={pizza.image} price={pizza.price} />
          })
        }
      </div>

    </motion.div>
  )
}

export default Menu