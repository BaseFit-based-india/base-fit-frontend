import { NavbarComponent } from "@/components/Navbar"
import { WorkoutCardComponent } from "@/components/workout-card"

const MoveToEarnPage = () => {
  return (
    <div>
      <NavbarComponent />
      <div className="container mx-auto py-10">
        <h1>Training that will make you sweat.</h1>
        <p>Base Fit members have over 4,000 workouts at their fingertips. Try one now.</p>
        <div className="flex flex-row gap-4 justify-between py-10">
          <WorkoutCardComponent />
          <WorkoutCardComponent />
          <WorkoutCardComponent />
          <WorkoutCardComponent />
        </div>
        <h1>Build a stronger mind with a mental fitness routine that sticks.</h1>
        <div className="flex flex-row gap-4 justify-between py-10">
          <WorkoutCardComponent />
          <WorkoutCardComponent />
          <WorkoutCardComponent />
          <WorkoutCardComponent />
        </div>
      </div>
    </div>
  )
}

export default MoveToEarnPage