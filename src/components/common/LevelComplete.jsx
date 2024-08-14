import MainButton from "./MainButton";
import img from './../../images/gifs/complete.gif'
import img2 from './../../images/icons/score.svg'
import img3 from './../../images/icons/accuracy.svg'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addScore } from "../../store/pointsScoreSlice";

const LevelComplete = () => {

    const dispatch = useDispatch()
    const themeArray = useSelector(state => state.theme.theme.array);

    useEffect(() => {
        dispatch(addScore())
    }, [dispatch])



    const errors = useSelector(state => state.accuracy.errors)
    return (

        <div className="completedlesson">

            <div className="completed__image">
                <img src={img} alt="" />
            </div>
            <div className="completed__title">Урок завершён!</div>
            <div className="completed__cards">
                <div className="card__fire">
                    <div className="card__text">Вы получили</div>
                    <div className="row__number">
                        <img src={img2} alt="" />
                        <div className="number__text">1</div>
                    </div>
                </div>
                <div className="card__score">
                    <div className="card__text">Точность</div>
                    <div className="row__number">
                        <img src={img3} alt="" />
                        <div className="number__text text-accuracy">{100 - Math.floor(errors / themeArray.length * 100) < 0 ? 0 : 100 - Math.floor(errors / themeArray.length * 100)}%</div>
                    </div>
                </div>
            </div>
            <MainButton content={'Продолжить'} />

        </div>

    );
}

export default LevelComplete;