import img1 from './../../images/avatarImage.svg'
import img2 from './../../images/icons/score.svg'

const ProfilePage = ({ title }) => {
    return (
        <section className="profile">
            <div className="menu__title">{title}</div>
            <div className="profile__header">
                <div className="header__icon">
                    <img src={img1} alt="123" />
                </div>
                <div className="header__header">
                    <div className="heading__name">Peter Griifin</div>
                    <div className="heading__surname">Peterdactyl2015</div>
                </div>


            </div>
            <div className="profile__statistics">
                <div className="statistics__header">Статистика</div>
                <div className="statistics__card">
                    <div className="card__ico">
                        <img src={img2} alt="" />
                    </div>
                    <div className='card__desc'>
                        <div className="desc__number">166</div>
                        <div className="desc__text">Всего очков</div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ProfilePage;