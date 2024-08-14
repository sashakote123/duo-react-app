import ThemeItem from './ThemeItem';

const MainPageMenu = ({ title, themesList }) => {
    console.log(themesList);
    return (
        themesList && (
            <section className="main-page-menu">
                <div className="menu__title">{title}</div>
                <ul className="menu__themes">
                    {themesList.map((item, index) => {
                        return <ThemeItem key={item.theme} theme={item} themeName={item.theme} themeNumber={index + 1} />
                    })}


                </ul>
            </section>
        )

    );
}

export default MainPageMenu;