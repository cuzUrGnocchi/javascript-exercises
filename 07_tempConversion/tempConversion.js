const convertToCelsius = function(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5 / 9);
  return roundTemperature(celsius);
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = (celsius * 9 / 5 + 32);
  return roundTemperature(fahrenheit);
};

function roundTemperature(temp) {
  return temp % 1 === 0 ? +temp.toFixed(0) : +temp.toFixed(1);
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
