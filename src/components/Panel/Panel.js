import React from 'react';
import './Panel.scss';

export default ({
  floorArr,
  onClick,
}) => (
    <div className="panel">
      <div className="panel__content">
        {floorArr.map(floor => (
          <div className="panel__content-btn" onClick={onClick(floor)}>
            <button className="panel__content-btn-content">
              {floor}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
