import { ChallengeCardComponent } from "@/components/challenge-card"
import { NavbarComponent } from "@/components/Navbar"

const FanBattlePage = () => {
  return (
    <div>
      <NavbarComponent />
      <div className="container mx-auto py-10">
        <h1>Training that will make you sweat.</h1>
        <div className="flex justify-between pt-10">
          <div className="w-[60%]  flex flex-col gap-10">
            <ChallengeCardComponent />
            <ChallengeCardComponent />
          </div>
          <div className="w-[30%] bg-red-50 "></div>
        </div>
      </div>
    </div>
  )
}

export default FanBattlePage