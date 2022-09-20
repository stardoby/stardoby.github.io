import './Home.css';
import React from 'react';
import blueDVD from '../../assets/images/blue-DVD.png';
import darkblueDVD from '../../assets/images/dark-blue-DVD.png';
import neonDVD from '../../assets/images/neon-DVD.png';
import turqDVD from '../../assets/images/turquoise-DVD.png';
import ellipse from '../../assets/images/ellipse.png';
import {DVD} from '../DVD/dvd';

const DVDS = [blueDVD, darkblueDVD, neonDVD, turqDVD];
const TEXT = ['About', 'Projects', 'Contact', 'Music'];

class Home extends React.Component {

  static createDVD() {
    const listItems = [];
    for (let i = 0; i < DVDS.length; i++) {
      let link = TEXT[i];
      listItems[i] = 
      (
        <DVD image={DVDS[i]} ellipse={ellipse} i={i} link={link} />
      )
    }
    return listItems;
  }

  //<header className="Home-header"> </header>

  //<div className="Home-record">
  //<img src={record} alt="Blue Drippy Record" width='300px'height='368px'/>
  //</div> 

  render() {
    return (
      <div>
        <header className="Home-header"> </header>
        <div className="Home-text0">
          <p>
            <span>Hello! </span> 
            <span>I </span> 
            <span>am </span> 
            <span className="Home-blue">Miraclestar Doby</span>
          </p>
        </div>
        <div className="Home-text2">
          <p>
            <span>but, </span>
            <span>you can call me </span>
            <span className="Home-blue">Star.</span>
          </p>
        </div>
        
        <div>{Home.createDVD()}</div>
      </div>
    );
  }
}

export default Home;