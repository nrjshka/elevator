import { TIMER, ELEVATOR } from './types';

export const timer = {
  status: TIMER.STATUS.UNWORKING,
  id: 0,
};

export const elevator = {
  floorCount: 5,
  currentFloor: 1,
  isOpen: false,
  movingTo: ELEVATOR.MOVING_TO.STAYING,
};


export default {
  timer,
  elevator,
};
