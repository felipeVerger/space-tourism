import { motion } from 'framer-motion';

import './Home.css';

const Home = () => {
  return (
    <div className='container'>
      <motion.div className='block-content' initial={{ opacity: 0, y: 100}} animate={{ opacity: 1, y: 0}} transition={{duration: 2}}>
        <p className='text-heading'>So, you want to travel to</p>
        <h1>Space</h1>
        <p className='text'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </motion.div>
      <motion.button 
        className='explore-btn' 
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "50%"]
        }}
        >Explore</motion.button>
    </div>
  )
}

export default Home