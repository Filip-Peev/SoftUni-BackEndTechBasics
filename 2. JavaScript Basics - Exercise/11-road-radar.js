function solve(speed, area) {
    'use strict';

    let speedLimit = 0;

    if (area === 'motorway') {
        speedLimit = 130;
    } else if (area === 'interstate') {
        speedLimit = 90;
    } else if (area === 'city') {
        speedLimit = 50;
    } else if (area === 'residential') {
        speedLimit = 20;
    }

    const speedLimitDifference = speed - speedLimit;

    if (speedLimitDifference <= 0) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    } else {
        let speedingStatus = '';

        if (speedLimitDifference > 0 && speedLimitDifference <= 20) {
            speedingStatus = 'speeding';
        } else if (speedLimitDifference > 20 && speedLimitDifference <= 40) {
            speedingStatus = 'excessive speeding';
        } else {
            speedingStatus = 'reckless driving';
        }

        console.log(`The speed is ${speedLimitDifference} km/h faster than the allowed speed of ${speedLimit} - ${speedingStatus}`);
    }
}