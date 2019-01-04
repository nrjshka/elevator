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
    case ELEVATOR.MOVE: {
      const { currentFloor } = state;
      const { floor } = action;

      return {
        ...state,
        currentFloor: currentFloor + floor,
      }
    }
    case ELEVATOR.DOORS.OPEN:
      return {
        ...state,
        isOpen: true,
      };
    case ELEVATOR.DOORS.CLOSE:
      return {
        ...state,
        isOpen: false,
      };
    default:
      break;
  }
  return state;
}