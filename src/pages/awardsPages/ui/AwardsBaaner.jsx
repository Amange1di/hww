import "../style/AwardsBaaner.scss";
import awardsHero_img from "../img/awards_Baaner_img.png";

const AwardsBaaner = () => {
  return (
    <div id='awards_Baaner'>
      <div className="awards_Baaner container">
        <div className="awards_Baaner_text ">
          <h1>Наследие Успеха Наши  <br />Достижения</h1>
          <div>
            <p>Исламская Академия гордится тем, что предоставляет своим студентам уникальные возможности для роста и развития. Мы стремимся не только к передаче знаний, но и к формированию личностей, готовых внести вклад в общество.</p>
          </div>
          <button>Посмотреть видео в YouTube</button>
        </div>
        <img className='col-6' src={awardsHero_img} />
      </div>
    </div>
  );
}

export default AwardsBaaner;
