import MainButton from "./MainButton";
import img from './../../images/gifs/failed.gif'
import img2 from './../../images/icons/score.svg'


const LevelFailed = ({ text }) => {

    return (
        <div className="completedlesson">
            <div className="completed__image">
                <img src={img} alt="" />
            </div>
            <div className="completed__title">{text}</div>
            <div className="completed__cards">
                <div className="card__fire">
                    <div className="card__text">Вы получили</div>
                    <div className="row__number">
                        <img src={img2} alt="" />
                        <div className="number__text">0</div>
                    </div>
                </div>
            </div>
            <MainButton content={'Вернуться'} />
        </div>
    );
}

export default LevelFailed;