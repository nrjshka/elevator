import { TIMER } from '../const/types';

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
    default:
      break;
  }

  return next(action);
}
