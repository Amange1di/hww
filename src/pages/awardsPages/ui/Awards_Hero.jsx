import React from 'react';
import "../style/Awards_Hero.scss";
import awardsHero_img from "../img/awardsHero_img.png";

const Awards_Hero = () => {
  return (
    <div id='awards_hero'>
      <div className="awards_hero container">
        <div className="awards_hero_text ">
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

export default Awards_Hero;
