export const getDeviceType = () => {
    if (typeof window !== 'undefined') {
        let width = window.innerWidth;

        if (width <= 1024) {
            return 'mobile';
        }
        else {
            return 'desktop';
        }
    }
    return "";
};