import { combineReducers } from 'redux';
import interviews from './interviews';
import filter from './filter';

const rootReducer = combineReducers({
  interviews,
  filter,
});

export default rootReducer;
