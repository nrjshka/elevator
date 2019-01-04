import { ELEVATOR } from '../const/types';

export const floorPanelOnClick = floor => ({
  type: ELEVATOR.FLOOR.CLICK,
  floor,
});
