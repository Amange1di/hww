
import "../style/HistoryBaaner.scss"
import Photo1 from '../../img/Photo1.jpg';
import Photo2 from '../../img/Photo2.jpg';

const HistoryBaaner = () => {
    return (
        <section className=' history_baaner container'>
            <div className='history_baaner_line  '>
                <hr className="line" />
                <h1>История нашей <br /> академии</h1>
                <hr className="linetwo" />
            </div>
            <div >
                <p className="history_baaner_text1">
                    Академия открыла свои двери в 1995 году благодаря инициативе <br /> группы
                    местных ученых и студентов, стремившихся создать <br /> пространство для
                    глубокого изучения.
                </p>
                <p className="history_baaner_text2">
                    В небольшом городе Алямир, расположенном среди зеленых <br /> холмов и тихих
                    рек, была основана Исламская академия «Свет <br /> знания». Это было началом
                    их истории.
                </p>
            </div>
              <div className='history_after '>
                     <div className="history_after_photo1">
                              <img src={Photo1} />
                      </div>
                      <div className="history_after_concept">
                    
                              <div className="history_after_concept_photo2">
                                <img src={Photo2} />
                              </div>
                              <div className="history_after_concept_text">
                    
                                <h3 >Основатели и концепция</h3>
                                <p>Основателями академии стали доктор Ибрагим аль-Фахри и его ученица Амира Халид. Доктор Ибрагим, известный теолог и историк, мечтал о месте, где могли бы встречаться традиционные исламские учения и современные знания. Амира, с её страстью к педагогике и инновациям, стала двигателем многих образовательных реформ в академии. Академия предлагала разнообразные программы, включая исламское богословие, историю ислама, арабский язык, а также курсы по социальной и естественной науке. Преподавание велось на высоком уровне, и студенты имели возможность участвовать в исследованиях и проектах, направленных на решение актуальных социальных проблем.
                                </p>
                              </div>
                      </div>
                </div>
        </section>
    )
}

export default HistoryBaaner