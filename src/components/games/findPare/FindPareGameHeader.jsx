import img1 from './../../../images/icons/close.svg'
import img2 from './../../../images/icons/clock.svg'
import img3 from './../../../images/icons/streak.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { updateTimer } from '../../../store/timerSlice'
import { useNavigate } from 'react-router'

const FindPareGameHeader = () => {

    const streak = useSelector(state => state.streak.streak)

    const timer = useSelector(state => state.timer.timer)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        const intervalId = setInterval(() => {
            dispatch(updateTimer());
        }, 1000);

        return () => clearInterval(intervalId); // Очистка интервала при размонтировании компонента
    }, [dispatch]);



    return (
        <div className="paregame__header">
            <div className="game-container">
                <div className="header__heading">
                    <div onClick={() => navigate(-1)} className="heading__cancel">
                        <img src={img1} alt="" />
                    </div>
                    <div className="heading__score"></div>
                    <div className="heading__timer">
                        <img src={img2} alt="" />
                        <div className="timer__text">{timer.minutes}:{timer.seconds}</div>
                    </div>
                </div>
                <div className="header__title">Нажмите на пары слов</div>
                <div className="header__streak">
                    <img src={img3} alt="" />
                    <div className="streak__text"><span>Серия</span> x{streak}</div>
                </div>
            </div>


        </div>
    );
}

export default FindPareGameHeader;