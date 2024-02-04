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
      <p style={{ maxWidth: 500 }}>
        A predictable state container for JavaScript applications, primarily
        used with frameworks like React. It helps manage the state of an
        application in a centralized manner, making it easier to track changes
        and maintain a consistent state throughout an application.
      </p>

      <h2>{count}</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
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
