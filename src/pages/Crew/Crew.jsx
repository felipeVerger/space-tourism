import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { images } from '../../constants/images';

import data from '../../server/data.json';
import './Crew.css'

const Crew = () => {
  const { id } = useParams();
  const [ crewMember, setCrewMember ] = useState([]);
  const location = useLocation().pathname.split('/')[2];

  useEffect(() => {
    setCrewMember(data.crew.filter(member => member.id == id));
  }, [id])

  return (
    <>
      <h3><strong>02</strong> meet your crew</h3>
      {crewMember.map((member) => (
        <div className="crew-container" key={member.id}>
          <motion.div className="crew-block" initial={{ opacity: 0, y: 100}} animate={{ opacity: 1, y: 0}} transition={{ duration: 2}}>
            <div className="crew-detail">
              <h4>{member.role}</h4>
              <h2>{member.name}</h2>
              <p>{member.bio}</p>
            </div>
            <ul className="crew-btn-list">
              <Link className={location === '1' ? "btn active" : 'btn'} to='/crew/1'/>
              <Link className={location === '2' ? "btn active" : 'btn'} to='/crew/2'/>
              <Link className={location === '3' ? "btn active" : 'btn'} to='/crew/3'/>
              <Link className={location === '4' ? "btn active" : 'btn'} to='/crew/4'/>
            </ul>
          </motion.div>
          <motion.img 
            src={member.id === 1 ? images.img1 : member.id === 2 ? images.img2 : member.id === 3 ? images.img3 : images.img4}
            alt="crew" 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2}}
          />
        </div>
      ))}
    </>
  );
}

export default Crew