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

      // Если на этом этаже вызывали лифт, то открываем двери, 
      // чтобы загрузить пассажиров и поехать дальше
      if (queue.includes(currentFloor)) {
        if (!isOpen) {
          store.dispatch({ type: ELEVATOR.DOORS.OPEN });
        } else {
          store.dispatch({ type: ELEVATOR.DOORS.CLOSE });

          // Чистим очередь ожидающих этажей после "загрузки" пассажиров
          store.dispatch({ type: QUEUE.DELETE, floor: currentFloor });

          // Если это был последний этаж, то останавливаем таймер и лифт
          if (queue.length === 1) {
            store.dispatch({ type: TIMER.END });

            store.dispatch({
              type: ELEVATOR.CHANGE_STATUS,
              status: ELEVATOR.MOVING_TO.STAYING,
            });
          } else {
            // Если это был не последний этаж, то меняем статус движения лифта и отправляем его двигаться
            const currentFloorId = queue.indexOf(currentFloor);
            const nextFloor = (currentFloorId > 0) ? queue[0] : queue[1];
            const isElevatorMovingToTop = nextFloor > currentFloor;

            store.dispatch({
              type: ELEVATOR.CHANGE_STATUS,
              status: isElevatorMovingToTop ? ELEVATOR.MOVING_TO.TOP : ELEVATOR.MOVING_TO.BOTTOM,
            });

            store.dispatch({
              type: ELEVATOR.MOVE,
              floor: isElevatorMovingToTop ? 1 : -1,
            });
          }
        }
      } else {
        // Если никто не вызывал лифт, то просто двигаемся дальше
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
