import { elevator } from '../const/store';
import { ELEVATOR } from '../const/types';

export default (state = elevator, action) => {
  switch (action.type) {
    case ELEVATOR.CHANGE_STATUS: {
      const { status } = action;

      return {
        ...state,
        movingTo: status,
      }
    }
    default:
      break;
  }
  return state;
}