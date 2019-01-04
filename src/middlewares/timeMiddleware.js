import { TIMER, ELEVATOR, QUEUE } from '../const/types';

export default store => next => action => {
  switch (action.type) {
    case TIMER.START: {
      const timerId = setInterval(() => store.dispatch({ type: TIMER.TICK }), 500);
      store.dispatch({ type: TIMER.SET, data: timerId });
      break;
    }
    case TIMER.END: {
      const { id: timerId, status } = store.getState().timer;
      if (status === TIMER.STATUS.WORKING) {
        clearInterval(timerId);
      }
      break;
    }
    case TIMER.TICK: {
      const { queue, elevator } = store.getState();
      const { currentFloor, isOpen } = elevator;

      if (queue.includes(currentFloor)) {
        if (!isOpen) {
          store.dispatch({ type: ELEVATOR.DOORS.OPEN });
        } else {
          store.dispatch({ type: ELEVATOR.DOORS.CLOSE });

          store.dispatch({ type: QUEUE.DELETE, floor: currentFloor });

          if (queue.length === 1) {
            store.dispatch({ type: TIMER.END });
          } else {
            const currentFloorId = queue.indexOf(currentFloor);
            const nextFloor = (currentFloorId > 0) ? queue[0] : queue[1];

            store.dispatch({
              type: ELEVATOR.MOVE,
              floor: nextFloor > currentFloor ? 1 : -1,
            });
          }
        }
      } else {
        store.dispatch({
          type: ELEVATOR.MOVE,
          floor: queue[0] > currentFloor ? 1 : -1,
        });
      }
      break;
    }
    default:
      break;
  }

  return next(action);
}
