const reverseString = function(string) {
    return string.split('').reduce((reversed, c) => {
        reversed.unshift(c);
        return reversed;
    }, []).join('');
};

// Do not edit below this line
module.exports = reverseString;
