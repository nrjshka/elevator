import React from 'react';
import './Panel.scss';

export default ({
  floorCount,
  onClick,
}) => (
    <div className="panel">
      <div className="panel__content">
        <div className="panel__content-btn">
          <button className="panel__content-btn-content">
            1
        </button>
        </div>
        <div className="panel__content-btn">
          <button className="panel__content-btn-content">
            2
        </button>
        </div>
        <div className="panel__content-btn">
          <button className="panel__content-btn-content">
            3
        </button>
        </div>
        <div className="panel__content-btn">
          <button className="panel__content-btn-content">
            4
        </button>
        </div>
        <div className="panel__content-btn">
          <button className="panel__content-btn-content">
            5
        </button>
        </div>
      </div>
    </div>
  );
