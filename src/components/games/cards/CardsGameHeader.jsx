import img1 from './../../../images/icons/close.svg'
import { useNavigate } from 'react-router'

const CardsGameHeader = () => {

    const navigate = useNavigate()



    return (
        <div className="paregame__header nomargin">
            <div className="game-container">
                <div className="header__heading">
                    <div onClick={() => navigate(-1)} className="heading__cancel">
                        <img src={img1} alt="" />
                    </div>
                    <div className="heading__score"></div>
                </div>
                <div className="header__title">Вспомните слово</div>
            
            </div>


        </div>
    );
}

export default CardsGameHeader;