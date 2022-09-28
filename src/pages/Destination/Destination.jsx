import {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import {motion} from 'framer-motion'
import { images } from '../../constants/images';

import data from '../../server/data.json'
import './Destination.css'

const Destination = () => {
  const { name } = useParams();

  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    setPlanets(data.destinations.filter(destination => destination.name.toLowerCase() === name));
  }, [name])


  return (
    <>
      <h3><strong>02</strong> pick your destination</h3>
      {planets.map((planet) => (
        <div className="destination-container" key={planet.name}>
          <motion.div
            className="planet-block"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            <img src={planet.name === "Moon" ? images.moon : planet.name === "Mars" ? images.mars : planet.name === "Europa" ? images.europa : images.titan} alt="planet"/>
          </motion.div>
          <motion.div className="planet-info" initial={{ opacity: 0, x: 200}} animate={{ opacity: 1, x: 0}} transition={{ duration: 2 }}>
            <ul className="planet-list">
              <Link className={planet.name === "Moon" ? "planet-list-items active" : "planet-list-items"} to="/destination/moon">MOON</Link>
              <Link className={planet.name === "Mars" ? "planet-list-items active" : "planet-list-items"} to="/destination/mars">MARS</Link>
              <Link className={planet.name === "Europa" ? "planet-list-items active" : "planet-list-items"} to="/destination/europa">EUROPA</Link>
              <Link className={planet.name === "Titan" ? "planet-list-items active" : "planet-list-items"} to="/destination/titan">TITAN</Link>
            </ul>
            <h2>{planet.name}</h2>
            <p>{planet.description}</p>
            <hr />
            <div className="details">
              <div className="detail-block">
                <span className="detail-title">AVG. DISTANCE</span>
                <span className="detail-info">{planet.distance}</span>
              </div>
              <div className="detail-block">
                <span className="detail-title">EST. TRAVEL TIME</span>
                <span className="detail-info">{planet.travel}</span>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </>
  );
}

export default Destination