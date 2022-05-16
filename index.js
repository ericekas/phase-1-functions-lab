
function distanceFromHqInBlocks(location) {
    return location > 42? location - 42 : 42 - location
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264
}


function distanceTravelledInFeet(startBlock, endBlock) {
    return startBlock > endBlock? (startBlock - endBlock) * 264 : (endBlock - startBlock) * 264
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if(distance < 400) return 0
    else if(distance <= 2000) return (distance - 400) * 0.02
    else if(distance <= 2500) return 25
    else return 'cannot travel that far'
}

