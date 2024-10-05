'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PowerSquatCardComponent() {
  return (
    <Card className="w-full  overflow-hidden rounded-3xl border-4 border-blue-100">
      <div className="flex p-6">
        <div className="flex-1 pr-4">
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
            Promo
          </div>
          <h2 className="mb-2 text-4xl font-bold text-gray-800">
            The Power Squat Showdown
          </h2>
          <p className="mb-6 text-xl text-gray-500">
            Delta Center<br />
            Salt Lake City, UT United States
          </p>
          <Button className="w-full max-w-xs h-12 text-blue-600 bg-blue-100 hover:bg-blue-200 border-2 border-blue-200 rounded-xl text-xl font-normal transition-all duration-200 ease-in-out">
            Bet Now
          </Button>
        </div>
        <div className="flex-1">
          <div className="relative w-full h-full min-h-[250px] rounded-2xl overflow-hidden">
            <img
              src="/placeholder.svg?height=250&width=250"
              alt="Athlete performing a squat"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </Card>
  )
}