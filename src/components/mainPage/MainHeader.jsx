import img1 from './../../images/icons/Logo.svg'
import img2 from './../../images/icons/score.svg'
import img3 from './../../images/avatarImage.svg'
import { useSelector } from 'react-redux';


const MainHeader = () => {



    const scores = useSelector(state => state.scores.points);
    console.log(scores);

    return (
        <header className="main-header">
            <div className="container">
                <div className="header__content">
                    <div className="header__logo">
                        <img src={img1} alt="" />
                    </div>
                    <div className="header__socials">
                        <div className="socials__scores">
                            <img src={img2} alt="" className="scores__ico" />
                            <div className="scores__number">{scores}</div>
                        </div>
                        <div className="socials__account">
                            <img src={img3} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </header>

    );
}

export default MainHeader;