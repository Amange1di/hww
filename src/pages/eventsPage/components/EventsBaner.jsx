import awardsBaaner_img from "../components/image.png"
import "../style/EventsBaner.scss"
const EventsBaner = () => {
  return (
        <div id='award_Baaner'>
      <div className="container">
      

        <div className="awards_Baaner">
          <div className="awards_Baaner_text  col-6">
          <h1>Будь в курсе: мероприятий, не упусти шанс поучаствовать!</h1>
            <div className="p">
              <p>
              «Горячие факты, вдохновляющие события и тренды — узнавайте первыми и будьте на шаг впереди».
              </p> </div>
          </div>
            <img className='awards_Baaner_img' src={awardsBaaner_img} alt="Уникальные возможности" />
        </div>
      </div>
    </div>
  )
}

export default EventsBaner