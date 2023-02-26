import { useEffect, useState, useRef } from "react";

const useCountdown = (initialtime) => {
    const [num, setNum] = useState(initialtime);

    let intervalRef = useRef();

    const decreaseNum = () => {
        setNum((prev) =>
            prev > 0 ? prev - 1 : clearInterval(intervalRef.current)
        );
    };

    useEffect(() => {
        intervalRef.current = setInterval(decreaseNum, 1000);
        return () => clearInterval(intervalRef.current);
    }, [num]);
    return [num, setNum];
};
export default useCountdown;
