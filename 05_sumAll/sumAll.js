const sumAll = function(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number' || x < 0 || y < 0) {
        return 'ERROR';
    }

    let sum = 0;
    let limits = [x, y].sort((x, y) => x - y);
    
    for (let n = limits[0]; n <= limits[1]; n++) {
        sum += n;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
