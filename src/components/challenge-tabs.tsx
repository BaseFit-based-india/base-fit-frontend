"use client"

import * as React from "react"
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"
const challenges = [
  "Bench Press Battle",
  "Lunge Warrior Challenge",
  "The Power Squat Showdown",
]

export function ChallengeTabsComponent() {
  const [activeTab, setActiveTab] = React.useState(challenges[2])

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-3xl">
      <TabsList className="flex justify-start space-x-4 bg-transparent">
        {challenges.map((challenge) => (
          <TabsTrigger
            key={challenge}
            value={challenge}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all
              ${activeTab === challenge
                ? "bg-blue-100 text-blue-600"
                : "bg-transparent text-gray-600 hover:text-gray-800"
              }`}
          >
            {challenge}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}