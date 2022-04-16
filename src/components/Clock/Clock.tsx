import React, { useEffect, useState } from "react";
import { Button } from '../';
import { ButtonLabels } from './config';
import { DEFAULT_COUNTDOWN, TICK } from '../../utils/constants';

const Clock = (): React.ReactElement => {
  const [countdown, setCountdown] = useState<number>(DEFAULT_COUNTDOWN);
  const [runningClock, setRunningClock] = useState<boolean>(false);

  useEffect(() => {
    // to prevent state update on an unmounted component
    let isMounted = true;

    const intervalId = setInterval(() => {
      if (runningClock && isMounted) {
        setCountdown(countdown => countdown - 1);
      }
    }, TICK);

    return (() => {
      isMounted = false;
      clearInterval(intervalId);
    
    });
  }, [runningClock])

  useEffect(() => {
    if (countdown < 0) {
      resetClock();
    }
  }, [countdown]);

  const resetClock = () => {
    setCountdown(DEFAULT_COUNTDOWN);
    setRunningClock(false);
  }

  return (
    <div>
        <div className="p-10 px-56 m-10 py-20 border-transparent bg-gray-300 shadow-xl rounded-xl">
          <span data-testid="countdown" className="font-thin text-6xl w-10 h-5">
            { countdown }
          </span>
        </div>
      <div className="flex flex-row justify-center gap-4">
        <Button
          onClick={() => setRunningClock(!runningClock)}
          type="normal"
          buttonText={runningClock ? ButtonLabels.stop : ButtonLabels.start}
        />
        <Button
          onClick={resetClock}
          type="danger"
          buttonText={ButtonLabels.reset}
          disabled={countdown === DEFAULT_COUNTDOWN}
        />
      </div>
    </div>
  );
};

export default Clock;
