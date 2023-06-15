


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
