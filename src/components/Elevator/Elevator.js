import React from 'react';
import classNames from 'classnames';

import './Elevator.scss';

import elevatorImg from '../../img/hangover.jpg';

export default ({ currentFloor, isOpen }) => (
  <div className={classNames("elevator",
    isOpen && 'elevator--open'
  )}>
    <div className="elevator__floor">
      {currentFloor}
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
