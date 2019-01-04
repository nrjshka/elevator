import { connect } from 'react-redux';
import Elevator from './Elevator';

export default connect(
  ({ elevator }) => (elevator),
)(Elevator);
