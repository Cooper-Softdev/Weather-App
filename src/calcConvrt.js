


export function getCloudDescription(cloudPercentage) {
  if (cloudPercentage >= 88) {
    return 'Cloudy to Overcast';
  } else if (cloudPercentage >= 70) {
    return 'Mostly Cloudy';
  } else if (cloudPercentage >= 51) {
    return 'Partly Sunny and Cloudy';
  } else if (cloudPercentage >= 26) {
    return 'Mostly Sunny';
  } else if (cloudPercentage >= 6) {
    return 'Sunny to Few Clouds';
  } else {
    return 'Sunny to Clear';
  }
}

export function roundInt(temperature) {
  return Math.round(temperature);
}

export function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5/9);
}

// From chatGPT for the fancy formula
export function calculateHeatIndex(tempF, humidity) {
  const c = [-42.379, 
    2.04901523, 
    10.14333127, 
    -0.22475541, 
    -6.83783e-3, 
    -5.481717e-2, 
    1.22874e-3, 
    8.5282e-4, 
    -1.99e-6
  ];

  // Calculation
  let heatIndex = c[0] +
      c[1] * tempF +
      c[2] * humidity +
      c[3] * tempF * humidity +
      c[4] * Math.pow(tempF, 2) +
      c[5] * Math.pow(humidity, 2) +
      c[6] * Math.pow(tempF, 2) * humidity +
      c[7] * tempF * Math.pow(humidity, 2) +
      c[8] * Math.pow(tempF, 2) * Math.pow(humidity, 2);

  // If the heat index is lower than the air temperature, return the air temperature instead
  heatIndex = heatIndex < tempF ? tempF : heatIndex;

  return Math.floor(heatIndex);
}

export function getHumidityDescription(dewPoint) {
  if (dewPoint <= 55) {
    return 'Dry';
  } else if (dewPoint > 55 && dewPoint < 65) {
    return 'Muggy';
  } else {
    return 'Stifling';
  }
}
