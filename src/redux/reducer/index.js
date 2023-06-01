import counterReducer from "./CounterSlice";
import todoSlice from "./TodoSlice";
const rootReducer = {
  counter: counterReducer,
  todo: todoSlice,
};
export default rootReducer;
