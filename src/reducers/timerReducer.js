import { TIMER } from '../const/types';
import { timer } from '../const/store';

export default (state = timer, action) => {
  switch (action.type) {
    case TIMER.START:
      return {
        ...state,
        status: TIMER.STATUS.WORKING,
      };
    case TIMER.SET:
      const { data: id } = action;
      return {
        ...state,
        id,
        status: TIMER.STATUS.WORKING,
      };
    case TIMER.END:
      return {
        ...state,
        status: TIMER.STATUS.UNWORKING,
      };
    default:
      break;
  }
  return state;
}