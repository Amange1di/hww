import "./style/Awards.scss"
import AwardsRepublic from './components/AwardsRepublic'
import AwardsAcademic from './components/AwardsAcademic'
import AwardsBaaner from "./components/AwardsBaaner"
import Gallery from "../gallery/Gallery"
const Awards = () => {
  return (
    <div className='awards'>
      <AwardsBaaner />
      <AwardsRepublic />
      <AwardsAcademic />
<Gallery/>
    </div>
  )
}

export default Awards   