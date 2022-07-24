import React, {useEffect, useRef} from 'react';

const useInterval = (callback, delay) => {
    const callbackRef = useRef();
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        const handler = () => {
            callbackRef.current();
        };
        if (delay !== null) {
            const id = setInterval(handler, delay);
            return () => clearInterval(id);
        }
    }, [delay]);

};

export default useInterval;
