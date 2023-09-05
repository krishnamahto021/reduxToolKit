import { TimerActions } from "../components/TimerActions";
import { Time } from "../components/Time";
import { useDispatch, useSelector } from "react-redux";
import { alertSelector, resetmessage } from "../redux/reducers/alertReducer";
import { useEffect } from "react";

export const Timer = () => {
  // get alert message here
  const { message } = useSelector(alertSelector);
  const dispatch = useDispatch();

  // create effect to reset alert message here
  useEffect(() => {
    if (message) {
      const timeoutId = setTimeout(() => {
        dispatch(resetmessage());
      }, 3000);

      // Clean up the timeout when the component unmounts or message changes
      return () => clearTimeout(timeoutId);
    }
  }, [dispatch, message]);

  return (
    <div className="page">
      {/* conditionally show the below div with alert message */}
      {message ? <div className="alert"> {message} </div> : null}
      <h1>Simple Timer</h1>
      <Time />
      <TimerActions />
    </div>
  );
};
