import "./style/Awards.scss"
import Awards_Republic from './ui/Awards_Republic'
import Awards_Academic from './ui/Awards_Academic'
import Awards_Baaner from "./ui/Awards_baaner"
import Gallery from "../gallery/Gallery"
const Awards = () => {
  return (
    <div className='awards'>
      {/* <Awards_Baaner /> */}
      <Awards_Republic />
      <Awards_Academic />
      <Gallery/>
    </div>
  )
}

export default Awards   