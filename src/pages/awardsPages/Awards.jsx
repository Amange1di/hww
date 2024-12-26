import "./style/Awards.scss"
import Awards_Republic from './ui/Awards_Republic'
import Awards_Academic from './ui/Awards_Academic'
import Awards_Hero from "./ui/Awards_Hero"
const Awards = () => {
  return (
    <div className='awards'>
      <Awards_Hero/>
      <Awards_Republic/>
      <Awards_Academic/>
      {/* <Detailed_Awards/> */}
    </div>
  )
}

export default Awards   