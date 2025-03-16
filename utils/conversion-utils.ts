import { conversionData, type ConversionCategory } from "./conversion-data"

// Temperature conversion function
export const convertTemperature = (value: number, from: string, to: string): number => {
  if (from === to) return value

  // Convert to Celsius first
  let celsius
  if (from === "celsius") {
    celsius = value
  } else if (from === "fahrenheit") {
    celsius = (value - 32) * (5 / 9)
  } else if (from === "kelvin") {
    celsius = value - 273.15
  }

  // Convert from Celsius to target unit
  if (to === "celsius") {
    return celsius
  } else if (to === "fahrenheit") {
    return celsius * (9 / 5) + 32
  } else if (to === "kelvin") {
    return celsius + 273.15
  }

  return value // Fallback
}

// General conversion function
export const convertValue = (
  value: string,
  from: string,
  to: string,
  category: ConversionCategory,
): { result: string; error: string } => {
  if (value === "") {
    return { result: "", error: "" }
  }

  const numValue = Number.parseFloat(value)

  if (isNaN(numValue)) {
    return { result: "", error: "Please enter a valid number" }
  }

  if (category === "temperature") {
    const result = convertTemperature(numValue, from, to)
    return { result: result.toFixed(4), error: "" }
  } else {
    const fromRate = conversionData[category][from as keyof (typeof conversionData)[typeof category]]
    const toRate = conversionData[category][to as keyof (typeof conversionData)[typeof category]]
    const result = (numValue * toRate) / fromRate
    return { result: result.toFixed(4), error: "" }
  }
}

// Format unit name for display
export const formatUnitName = (unit: string): string => {
  return unit.charAt(0).toUpperCase() + unit.slice(1).replace("_", " ")
}

