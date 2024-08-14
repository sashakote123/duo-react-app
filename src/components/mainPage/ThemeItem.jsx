import { useDispatch } from 'react-redux'
import img1 from './../../images/icons/themeBookIco.svg'
import { changeTheme } from '../../store/currentThemeSlice'
import { Link, useLocation } from 'react-router-dom'


const ThemeItem = ({ theme, themeName, themeNumber }) => {
    const dispatch = useDispatch()

    const loc = useLocation()
    console.log(loc);

    const toggleVisibility = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(changeTheme(theme))
        const target = document.querySelector('.vocabulary')
        target.classList.remove('none')
    }

    let pathname = loc.pathname === '/' ? `/${theme.theme}` : `${loc.pathname}/${theme.theme}`

    return (
        <li >
            <Link to={pathname} className="theme">
                <div className="theme__heading">
                    <div className="heading__title">Тема {themeNumber}</div>
                    <div className="heading__description">{themeName}</div>
                </div>
                <button onClick={toggleVisibility} className="theme__vocabl">
                    <img src={img1} alt="" className="vocabl__ico" />
                    <div className="vocabl__text">Слова</div>
                </button>

            </Link>
        </li>
    );
}

export default ThemeItem;