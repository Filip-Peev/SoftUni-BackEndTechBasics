function solve(args) {
    'use strict';
    const numberOfBricks = parseInt(args[0], 10);
    const cartCapacity = parseInt(args[1], 10);
    const numberOfWorkers = parseInt(args[2], 10);

    const totalBricksPerTrip = numberOfWorkers * cartCapacity;
    const numberOfTrips = Math.ceil(numberOfBricks / totalBricksPerTrip);

    console.log(numberOfTrips);
}