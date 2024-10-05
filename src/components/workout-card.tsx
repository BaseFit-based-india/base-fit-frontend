'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function WorkoutCardComponent() {
  return (
    <Card className="w-full max-w-sm overflow-hidden rounded-3xl border border-gray-200">
      <div className="relative h-48">
        <img
          src="/placeholder.svg?height=192&width=384"
          alt="Man exercising with dumbbells"
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center mb-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
          <span className="font-semibold text-gray-800">Centr Team</span>
        </div>
        <h2 className="text-xl font-bold mb-2">Power Shred: Active Arms - Day 1</h2>
        <p className="text-sm text-gray-600 mb-2">
          Cut fat and build power at home and get your desired physique.
        </p>
        <p className="text-sm text-gray-600 mb-4">35 mins</p>
        <div className="flex space-x-2 mb-4">
          <Badge variant="secondary" className="bg-gray-100 text-gray-800">
            Musclebuilding
          </Badge>
          <Badge variant="secondary" className="bg-gray-100 text-gray-800">
            Dumbbells
          </Badge>
        </div>
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          Start Your Workout
        </Button>
      </CardContent>
    </Card>
  )
}