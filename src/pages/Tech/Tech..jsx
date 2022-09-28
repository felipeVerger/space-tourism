import { useEffect, useState } from 'react';
import { images } from '../../constants/images';
import { Link, useLocation, useParams} from 'react-router-dom';
import { motion } from 'framer-motion'

import data from '../../server/data.json';
import './Tech.css';


const Tech = () => {
  const { id } = useParams();
  const [tech, setTech] = useState([]);
  const location = useLocation().pathname.split('/')[2];

  useEffect(() => {
    setTech(data.technology.filter(tech => tech.id == id));
  }, [id])

  console.log(location);

  return (
    <>
      {tech.map((tech) => (
        <div className="tech-container">
          <h3>
            <strong>03</strong> space launch 101
          </h3>
          <div className="tech-content-block">
            <motion.div className="tech-btn-list" initial={{opacity: 0, x: -300}} animate={{opacity: 1, x: 0}} transition={{duration: 2}}>
              <Link className={location == 1 ? 'tech-btn active' : 'tech-btn'} to='/tech/1'>1</Link>
              <Link className={location == 2 ? 'tech-btn active' : 'tech-btn'} to='/tech/2'>2</Link>
              <Link className={location == 3 ? 'tech-btn active' : 'tech-btn'} to='/tech/3'>3</Link>
            </motion.div>
            <motion.div className="tech-info" initial={{opacity: 0, y: 200}} animate={{opacity: 1, y: 0}} transition={{duration: 2}}>
              <h4>The terminology</h4>
              <h2>{tech.name}</h2>
              <p>{tech.description}</p>
            </motion.div>
          </div>
          <motion.img 
            className='tech-img'
            src={location === '1' ? images.tech1 : location === '2' ? images.tech2 : images.tech3} 
            alt="tech-image" 
            initial={{ opacity: 0, x: 500}}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2}}
          />
        </div>
      ))}
    </>
  );
}

export default Tech