"use client"

import type React from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { ConversionCategory } from "@/utils/conversion-data"

interface CategorySelectorProps {
  category: ConversionCategory
  onCategoryChange: (category: ConversionCategory) => void
  children: React.ReactNode
}

export default function CategorySelector({ category, onCategoryChange, children }: CategorySelectorProps) {
  return (
    <Tabs value={category} onValueChange={(value) => onCategoryChange(value as ConversionCategory)} className="mb-4">
      <TabsList className="grid grid-cols-3 mb-4">
        <TabsTrigger value="length">Length</TabsTrigger>
        <TabsTrigger value="weight">Weight</TabsTrigger>
        <TabsTrigger value="temperature">Temperature</TabsTrigger>
      </TabsList>

      {["length", "weight", "temperature"].map((cat) => (
        <TabsContent key={cat} value={cat} className="space-y-4">
          {children}
        </TabsContent>
      ))}
    </Tabs>
  )
}

