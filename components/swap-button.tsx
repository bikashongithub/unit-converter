"use client"

import { Button } from "@/components/ui/button"
import { ArrowRightLeft } from "lucide-react"

interface SwapButtonProps {
  onClick: () => void
}

export default function SwapButton({ onClick }: SwapButtonProps) {
  return (
    <Button variant="ghost" size="icon" onClick={onClick} className="mt-6" aria-label="Swap units">
      <ArrowRightLeft className="h-4 w-4" />
    </Button>
  )
}

