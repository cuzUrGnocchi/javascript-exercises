const repeatString = function(string, multiplier) {
    if (multiplier < 0) {
        return 'ERROR';
    }

    let product = '';
    for (let i = 0; i < multiplier; i++) {
        product += string;
    }
    return product;
};

// Do not edit below this line
module.exports = repeatString;
