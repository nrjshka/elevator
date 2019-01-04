import { ELEVATOR, TIMER, QUEUE } from '../const/types';

export default store => next => action => {
  switch (action.type) {
    case ELEVATOR.FLOOR.CLICK: {
      const { movingTo, currentFloor } = store.getState().elevator;
      const { status: timerStatus } = store.getState().timer;
      const { floor: calledFloor } = action;

      store.dispatch({ type: QUEUE.ADD, floor: calledFloor });

      // Если лифт стоит, то нужно изменить его направленость
      if (movingTo === ELEVATOR.MOVING_TO.STAYING) {
        // TODO: обрабатывать кейс, когда лифт вызвали на этаж, на котором он уже находится
        store.dispatch({
          type: ELEVATOR.CHANGE_STATUS,
          status: calledFloor > currentFloor ? ELEVATOR.MOVING_TO.TOP : ELEVATOR.MOVING_TO.BOTTOM,
        });
      }

      if (timerStatus === TIMER.STATUS.UNWORKING) {
        store.dispatch({ type: TIMER.START });
      }
      break;
    }
    default:
      break;
  }

  return next(action);
};
