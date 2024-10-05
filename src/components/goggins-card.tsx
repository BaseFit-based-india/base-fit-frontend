'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function GogginsCard() {
  return (
    <Card className="w-full max-w-3xl overflow-hidden rounded-3xl border border-gray-200">
      <div className="relative h-48 bg-gray-100">
        <img
          src="https://source.unsplash.com/random/800x200?fitness"
          alt="Beyond Motivated"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white tracking-wider">BEYOND MOTIVATED</h1>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <img
            src="https://source.unsplash.com/random/100x100?man"
            alt="David Goggins"
            className="w-20 h-20 rounded-full mr-4 object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">David Goggins</h2>
            <p className="text-gray-600">Stamina & Mental Toughness Coach</p>
          </div>
        </div>
        <p className="text-gray-700 mb-6">
          David Goggins, a former Navy SEAL, is known for extreme mental toughness. His program
          builds both physical endurance and mental resilience, emphasizing discipline and grit.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {[
            { title: "Endurance-Focused Workouts", image: "gym" },
            { title: "Mindset & Motivation", image: "meditation" },
            { title: "Extreme Challenges", image: "running" },
            { title: "Consistency & Discipline", image: "workout" },
          ].map((item) => (
            <Card key={item.title} className="overflow-hidden">
              <img
                src={`https://source.unsplash.com/random/300x200?${item.image}`}
                alt={item.title}
                className="w-full h-32 object-cover"
              />
              <CardContent className="p-2 bg-gray-100">
                <p className="text-sm font-semibold text-center">{item.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full">
          Subscribe to access
        </Button>
      </CardContent>
    </Card>
  )
}