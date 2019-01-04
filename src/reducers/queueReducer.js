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
    default:
      break;
  }

  return state;
}