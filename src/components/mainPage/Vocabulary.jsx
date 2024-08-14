import { useRef } from 'react'
import img1 from './../../images/icons/close.svg'
import img2 from './../../images/sound.svg'
import KUTE from 'kute.js';

const Vocabulary = ({ theme, description, array }) => {


    const speakWord = (e) => {
        const text = e.target.parentElement.nextElementSibling.innerHTML
        console.log(text);
        const utterance = new SpeechSynthesisUtterance(text);

        utterance.lang = 'ru-RU';
        utterance.pitch = 1;
        utterance.rate = 1.5;

        window.speechSynthesis.speak(utterance);
    }

    const speakTranslate = (e) => {
        const text = e.target.parentElement.nextElementSibling.innerHTML
        const utterance = new SpeechSynthesisUtterance(text);

        utterance.lang = 'en-US';
        utterance.pitch = 1;
        utterance.rate = 1;

        window.speechSynthesis.speak(utterance);
    }




    const toggleVisibility = () => {
        const target = document.querySelector('.vocabulary')
        target.classList.add('none')
    }

    // const section = document.querySelector('.vocabulary')
    // const card = document.querySelector('.vocabulary__card')

    // const tween1 = KUTE.fromTo(card, { translateX: 500 }, { translateX: 0});
    // if (section && !section.classList.contains('none')) tween1.start()



    return (
        <section className="vocabulary none">
            <div className="vocabulary__card">
                <button onClick={toggleVisibility} className="card__close-btn">
                    <img src={img1} alt="" />
                </button>

                <div className="card__title">{theme}</div>
                <div className="card__desc">{description}</div>
                <table className="card__words">
                    <tr>
                        <th>Слово</th>
                        <th>Перевод</th>
                    </tr>
                    {array.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>
                                    <div className='table-row'>
                                        <div onClick={speakWord} className='sound-ico'>
                                            <img src={img2} alt="" />
                                        </div>
                                        <div>{item.word}</div>
                                    </div>
                                </td>

                                <td>
                                    <div className='table-row'>
                                        <div onClick={speakTranslate} className='sound-ico'>
                                            <img src={img2} alt="" />
                                        </div>
                                        <div>{item.translate}</div>
                                    </div>
                                </td>
                            </tr>
                        )

                    })}
                </table>
            </div>

        </section>
    );
}

export default Vocabulary;