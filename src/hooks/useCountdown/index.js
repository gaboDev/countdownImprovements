import useInterval from "../useInterval";
import {useState} from "react";
import {calculateCountdown} from "../../utils/dates";

const initialState = {
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
};

export const countDownStatus = {
    initial: 'initial',
    running: 'running',
    finished: 'finished'
}

const useCountdown = (date) => {
    const [countdown, setCountdown] = useState(initialState);
    const [hasBeenCalled, setHasBeenCalled] = useState(false);

    useInterval(() => {
        setCountdown( calculateCountdown(date) );
        setHasBeenCalled(true);
    }, 1000);

    const getCountDownStatus = () => {
        if(!hasBeenCalled)
            return countDownStatus.initial;
        const {
            years,
            days,
            hours,
            min,
            sec,
        } = countdown;
        return years <= 0 && days <= 0 && hours <= 0 && min <= 0 && sec <= 0
               ? countDownStatus.finished
               : countDownStatus.running
    };
    return [countdown, getCountDownStatus];
};

export default useCountdown;
