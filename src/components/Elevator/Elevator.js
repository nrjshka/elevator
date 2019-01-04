import React from 'react';
import './Elevator.scss';

import elevatorImg from '../../img/hangover.jpg';

export default () => (
  <div className="elevator">
    <div className="elevator__floor">
      3
    </div>
    <div className="elevator__people">
      <img
        className="elevator__people-img"
        src={elevatorImg}
        alt="hangover"
      />
    </div>
  </div>
);
