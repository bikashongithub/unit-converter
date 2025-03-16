// Conversion data for different unit categories
export const conversionData = {
  length: {
    meters: 1,
    kilometers: 0.001,
    centimeters: 100,
    millimeters: 1000,
    miles: 0.000621371,
    yards: 1.09361,
    feet: 3.28084,
    inches: 39.3701,
  },
  weight: {
    kilograms: 1,
    grams: 1000,
    milligrams: 1000000,
    metric_tons: 0.001,
    pounds: 2.20462,
    ounces: 35.274,
  },
  temperature: {
    celsius: "celsius",
    fahrenheit: "fahrenheit",
    kelvin: "kelvin",
  },
}

export type ConversionCategory = keyof typeof conversionData
export type UnitType = string

