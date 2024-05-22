import { useState, useEffect } from 'react';
import { getDeviceType } from "../utils/getDeviceType";

const useDeviceType = () => {
    const [device, setDevice] = useState(getDeviceType());

    useEffect(() => {
        const handleResize = () => {
            setDevice(getDeviceType());
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return device;
};

export default useDeviceType;
