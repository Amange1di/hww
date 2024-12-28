import "./style/Awards.scss"
import Awards_Republic from './ui/Awards_Republic'
import Awards_Academic from './ui/Awards_Academic'
import Awards_Baaner from "./ui/Awards_baaner"
const Awards = () => {
  return (
    <div className='awards'>
      <Awards_Baaner />
      <Awards_Republic />
      <Awards_Academic />
    </div>
  )
}

export default Awards   