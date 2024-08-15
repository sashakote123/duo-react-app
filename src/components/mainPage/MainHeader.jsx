import img1 from './../../images/icons/Logo.svg'
import img2 from './../../images/icons/score.svg'
import img3 from './../../images/avatarImage.svg'
import { useSelector } from 'react-redux';
import AuthorizationForm from '../common/AutorisationForm';
import { useRef } from 'react';


const MainHeader = () => {

    const ref1 = useRef()
    const toggleAuth = () => {
        console.log(ref1.current);
        ref1.current.classList.toggle('none')
    }

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
                        <div onClick={toggleAuth} className="socials__account">
                            <img src={img3} alt="" />
                        </div>
                    </div>
                </div>
                <div ref={ref1} className="auth-container none">
                    <AuthorizationForm />
                </div>

            </div>
        </header>

    );
}

export default MainHeader;