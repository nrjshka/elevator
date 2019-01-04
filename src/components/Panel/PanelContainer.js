import { connectAdvanced } from 'react-redux';
import { equals } from 'ramda';

import Panel from './Panel';
import { floorPanelOnClick } from '../../actions';

const mapStateToPropsFactory = dispatch => {
  let result = {};
  return ({ elevator }, ownProps) => {
    const { floorCount } = elevator;

    const floorArr = [];
    for (let i = 1; i <= floorCount; i++) {
      floorArr.push(i);
    }

    const stateProps = {
      ...elevator,
      floorArr,
      onClick: floor => () => dispatch(floorPanelOnClick(floor)),
    };

    const nextProps = {
      ...ownProps,
      ...stateProps,
    };

    if (!equals(result, nextProps)) result = nextProps;

    return result;
  };
};

export default connectAdvanced(mapStateToPropsFactory)(Panel);
