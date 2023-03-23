const removeFromArray = function(...params) {
    const [dirtyArray, ...nuiseances] = params;
    let cleanArray = [...dirtyArray];
    for (let i = cleanArray.length - 1; i > -1; i--) {
        if (arrayContainsNumber(nuiseances, cleanArray[i])) {
            cleanArray = cleanArray.slice(0, i).concat(cleanArray.slice(i + 1));
        }
    }
    return cleanArray;

    function arrayContainsNumber(array, number) {
        for (e of array) {
            if (e !== number) continue;
            return true;
        }
        return false;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
