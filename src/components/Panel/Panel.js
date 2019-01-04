import React from 'react';
import classNames from 'classnames';

import './Panel.scss';

export default ({
  floorArr,
  onClick,
}) => (
    <div className="panel">
      <div className="panel__content">
        {floorArr.map(({ value, isActive }) => (
          <div className="panel__content-btn" onClick={onClick(value)}>
            <button className={classNames("panel__content-btn-content",
              isActive && "panel__content-btn-content--active"
            )}
            >
              {value}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
