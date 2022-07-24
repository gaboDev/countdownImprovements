export const calculateCountdown = (date) => {
    let diff = (Date.parse(new Date(date)) - Date.parse(new Date())) / 1000;
    const timeLeft = {
        years: 0,
        days: 0,
        hours: 0,
        min: 0,
        sec: 0,
    };

    if (diff >= (365.25 * 86400)) {
        timeLeft.years = Math.floor(diff / (365.25 * 86400));
        diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
        timeLeft.days = Math.floor(diff / 86400);
        diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
        timeLeft.hours = Math.floor(diff / 3600);
        diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
        timeLeft.min = Math.floor(diff / 60);
        diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
};
