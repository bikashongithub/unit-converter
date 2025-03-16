"use client"

import { Input } from "@/components/ui/input"

interface ConversionInputProps {
  value: string
  onChange?: (value: string) => void
  placeholder: string
  error?: boolean
  readOnly?: boolean
}

export default function ConversionInput({
  value,
  onChange,
  placeholder,
  error = false,
  readOnly = false,
}: ConversionInputProps) {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange ? (e) => onChange(e.target.value) : undefined}
      readOnly={readOnly}
      className={`${error ? "border-red-500" : ""} ${readOnly ? "bg-gray-50 dark:bg-gray-800" : ""}`}
    />
  )
}

