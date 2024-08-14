import { useDispatch } from 'react-redux';
import { addChoice } from '../../../store/initialShufflesSlice';




const WordItem = ({ word }) => {
    const dispatch = useDispatch()
    const selected = (e) => {
        e.target.classList.add('selected');
        dispatch(addChoice(e.target.innerHTML))
    }

    return (
        <div onClick={selected} className="word__item">{word}</div>
    )
}

export default WordItem;



