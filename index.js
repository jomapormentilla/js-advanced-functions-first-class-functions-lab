// Code your solution in this file!

function returnFirstTwoDrivers( drivers ) {
    return drivers.slice(0,2)
}

function returnLastTwoDrivers( drivers ) {
    return drivers.slice(drivers.length - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier( int ) {
    return function(  fare ){
        return fare * int
    }
}

function fareDoubler(fare) {
    return createFareMultiplier(2)(fare)
}

function fareTripler(fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers( drivers, returnFirstTwoDrivers ) {
    return returnFirstTwoDrivers( drivers )
}