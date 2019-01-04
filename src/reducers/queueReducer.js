import { isEmpty } from 'ramda';

import { QUEUE } from '../const/types';

export default (state = [], action) => {
  switch (action.type) {
    case QUEUE.ADD: {
      const { floor } = action;

      if (state.includes(floor)) {
        return state;
      }

      return [
        ...state,
        floor,
      ];
    }
    case QUEUE.DELETE: {
      const { floor } = action;
      const queue = [...state];

      if (!isEmpty(queue)) {
        const floorId = queue.indexOf(floor);
        queue.splice(floorId, 1);
      }
      return queue;
    }
    default:
      break;
  }

  return state;
}