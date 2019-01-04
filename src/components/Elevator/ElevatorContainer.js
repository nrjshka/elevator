import { connectAdvanced } from 'react-redux';
import { equals } from 'ramda';

import Elevator from './Elevator';


const mapStateToPropsFactory = () => {
  let result = {};
  return ({ elevator }, ownProps) => {
    const stateProps = {
      ...elevator,
    };

    const nextProps = {
      ...ownProps,
      ...stateProps,
    };

    if (!equals(result, nextProps)) result = nextProps;

    return result;
  };
};

export default connectAdvanced(mapStateToPropsFactory)(Elevator);
