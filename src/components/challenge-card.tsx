'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ChallengeCardComponent() {
  return (
    <Card className="w-full  overflow-hidden rounded-3xl border border-blue-100">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <img
            src="/placeholder.svg?height=64&width=64"
            alt="David Goggins"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-800">David Goggins</h2>
            <p className="text-gray-500">Fitness coach</p>
          </div>
        </div>
        <p className="text-lg text-gray-800 mb-6 text-center">
          Team Goggins ready for Challenge? Time to show Team Lazar who is the real boss.
        </p>
        <Card className="rounded-2xl border border-blue-100 mb-6">
          <CardContent className="p-4">
            <div className="flex items-center mb-4">
              <img
                src="/placeholder.svg?height=48&width=48"
                alt="Lazar Angelo"
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Lazar Angelo</h3>
                <p className="text-gray-500 text-sm">Fitness coach</p>
              </div>
            </div>
            <p className="text-gray-800 mb-4">
              <span className="font-semibold">Squat Marathon:</span> Lets see who can Do the most squats within 5 minutes
            </p>
            <img
              src="/placeholder.svg?height=300&width=500"
              alt="People doing squats"
              className="w-full rounded-xl"
            />
          </CardContent>
        </Card>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-800">Want to compete in this Challenge ?</p>
          <Button className="bg-blue-100 hover:bg-blue-200 text-blue-600 font-semibold py-2 px-4 rounded-full">
            Register Now
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}