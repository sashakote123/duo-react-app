import img1 from './../../images/icons/searchIco.svg'
import img2 from './../../images/icons/TrainIco.svg'
import img3 from './../../images/icons/PaleteIco.svg'
import img4 from './../../images/icons/BookIco.svg'
import img5 from './../../images/avatarImage.svg'
import img6 from './../../images/icons/OtherIco.svg'
import { NavLink } from 'react-router-dom'

const MainPageNavigation = () => {


    const setActive = ({ isActive }) => isActive ? 'row__item selected-item' : 'row__item';

    return (
        <nav className="navigation">
            <ul className="navigation__row">
                <li >
                    <NavLink to={'/'} className={setActive}>
                        <img src={img1} alt="" className="item__icon" />
                        <div className="item__text">Найди пару</div>
                    </NavLink>
                </li>
                <li >
                    <NavLink to={'/cards'} className={setActive} >
                        <img src={img2} alt="" className="item__icon" />
                        <div className="item__text">Карточки</div>
                    </NavLink>
                </li>
                {/* <li >
                    <NavLink to={'/'} className={setActive} >
                        <img src={img3} alt="" className="item__icon" />
                        <div className="item__text">опиши слово</div>
                    </NavLink>
                </li> */}
                <li >
                    <NavLink to={'/fromimage'} className={setActive} >
                        <img src={img4} alt="" className="item__icon" />
                        <div className="item__text">по картинке</div>
                    </NavLink>
                </li>
                <li >
                    <NavLink to={'/profile'} className={setActive} >
                        <img src={img5} alt="" className="item__icon" />
                        <div className="item__text">Профиль</div>
                    </NavLink>
                </li>
                <li >
                    <NavLink to={'/settings'} className={setActive}>
                        <img src={img6} alt="" className="item__icon" />
                        <div className="item__text">Настройки</div>
                    </NavLink>
                </li>


            </ul>
        </nav>
    );
}

export default MainPageNavigation;