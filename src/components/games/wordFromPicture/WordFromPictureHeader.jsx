import { useSelector } from 'react-redux';
import img1 from './../../../images/icons/close.svg'
import img3 from './../../../images/icons/streak.svg'
import { useNavigate } from "react-router";

const WordFromPictureHeader = () => {

    const navigate = useNavigate()
    const streak = useSelector(state => state.streak.streak)
    return (
        <div className="paregame__header nomargin">
            <div className="game-container">
                <div className="header__heading">
                    <div onClick={() => navigate(-1)} className="heading__cancel">
                        <img src={img1} alt="" />
                    </div>
                    <div className="heading__score"></div>
                </div>
                <div className="header__title">Выберите подходящее слово</div>
                <div className="header__streak">
                    <img src={img3} alt="" />
                    <div className="streak__text"><span>Серия</span> x{streak}</div>
                </div>
            </div>


        </div>
    );
}

export default WordFromPictureHeader;