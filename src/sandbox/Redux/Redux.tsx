import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./state/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./state/counter/counterSlice";

function Redux() {
  const count = useSelector((state: RootState) => state.value);
  const dispatch = useDispatch();

  return (
    <>
      <h3>Redux</h3>
      <h2>{count}</h2>

      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          increment by 2
        </button>
      </div>
    </>
  );
}

export default Redux;
