import "./style/Awards.scss"
import AwardsRepublic from './ui/AwardsRepublic'
import AwardsAcademic from './ui/AwardsAcademic'
import AwardsBaaner from "./ui/AwardsBaaner"
import Gallery from "../gallery/Gallery"
import History from "../historyPages/History"
const Awards = () => {
  return (
    <div className='awards'>
      <AwardsBaaner />
      <AwardsRepublic />
      <AwardsAcademic />
      <Gallery/>
      <History/>
    </div>
  )
}

export default Awards   