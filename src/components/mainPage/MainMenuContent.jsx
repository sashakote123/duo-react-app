import { Route, Routes, useLocation } from "react-router";
import MainPageMenu from "./MainPageMenu";
import MainPageNavigation from "./MainPageNavigation";
import FindPareGame from "../games/findPare/FindPareGame";
import { themesList } from "../../lists/themesList";
import { cardsThemesList } from "../../lists/cardsThemesList";
import CardGame from "../games/cards/CardGame";
import { wordFromPictureList } from "../../lists/wordFromPictureList";
import WordFromPicture from "../games/wordFromPicture/WordFromPicture";
import ProfilePage from "../common/ProfilePaje";


const MainMenuContent = () => {
    const location = useLocation();
    console.log(location);
    const isFindPareGameRoute = /^\/[^/]+$/.test(location.pathname)
        && location.pathname !== '/cards'
        && location.pathname !== '/fromimage'
        && location.pathname !== '/profile'
        && location.pathname !== '/settings'
        || /^\/cards\/[^/]+$/.test(location.pathname)
        || /^\/fromimage\/[^/]+$/.test(location.pathname);
    return (
        <div className="container">

            <section className="menu__content">
                {!isFindPareGameRoute && <MainPageNavigation />}
                <Routes>
                    <Route path="/" element={<MainPageMenu themesList={themesList} title={'Найди пару'} />} />
                    <Route path="/:id" element={<FindPareGame />} />
                    <Route path="/cards" element={<MainPageMenu themesList={cardsThemesList} title={'Карточки'} />} />
                    <Route path="/cards/:id" element={<CardGame />} />
                    <Route path="/fromimage" element={<MainPageMenu themesList={wordFromPictureList} title={'По картинке'} />} />
                    <Route path="/fromimage/:id" element={<WordFromPicture />} />
                    <Route path="/profile" element={<ProfilePage title={'Профиль'} />} />
                    <Route path="/settings" element={<MainPageMenu themesList={[]} title={'Настройки'} />} />
                </Routes>
            </section>
        </div>
    );
}

export default MainMenuContent;