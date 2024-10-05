import Card from "@/components/Card"
import { ChallengeTabsComponent } from "@/components/challenge-tabs"
import { NavbarComponent } from "@/components/Navbar"
import { PowerSquatCardComponent } from "@/components/power-squat-card"

const HomePage = () => {
  return (
    <div>
      <NavbarComponent />
      <div className="container mx-auto py-10">
        <h1>Fitness Bets</h1>
        <div className="flex flex-row gap-4 py-10">
          <PowerSquatCardComponent />
          <PowerSquatCardComponent />
          <PowerSquatCardComponent />
        </div>
        <ChallengeTabsComponent />
      </div>
    </div>
  )
}

export default HomePage